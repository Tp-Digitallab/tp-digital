import { NextResponse } from "next/server";

import {
  branding,
  marketing,
  websiteTypes,
} from "@/config/calculator";
import { features } from "@/config/features";
import { packagePresets } from "@/config/packagePresets";
import { support } from "@/config/support";

type PackageId =
  keyof typeof packagePresets;

interface QuoteInput {
  packageId?: string | null;
  websiteId?: string;
  languages?: string[];
  marketing?: string[];
  branding?: string[];
  features?: string[];
  support?: string[];
  total?: number;
  monthlyTotal?: number;
}

interface ContactRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  budget?: string;
  timeline?: string;
  discount?: boolean;
  language?: string;
  quote?: QuoteInput;
  turnstileToken?: string;
}

interface TurnstileResponse {
  success: boolean;
  hostname?: string;
  action?: string;
  challenge_ts?: string;
  "error-codes"?: string[];
}

function isString(
  value: unknown
): value is string {
  return typeof value === "string";
}

function isObject(
  value: unknown
): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

function cleanText(
  value: unknown,
  maximumLength: number
) {
  if (!isString(value)) {
    return "";
  }

  return value
    .trim()
    .slice(0, maximumLength);
}

function escapeTelegramHtml(
  value: unknown
) {
  return cleanText(value, 5000)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function cleanIds(
  value: unknown,
  allowedIds: readonly string[]
) {
  if (!Array.isArray(value)) {
    return [];
  }

  return Array.from(
    new Set(
      value.filter(
        (item): item is string =>
          typeof item === "string" &&
          allowedIds.includes(item)
      )
    )
  );
}

function getItemTitles(
  selectedIds: readonly string[],
  items: readonly {
    readonly id: string;
    readonly title: string;
  }[]
) {
  const titles = selectedIds
    .map(
      (id) =>
        items.find(
          (item) => item.id === id
        )?.title
    )
    .filter(
      (title): title is string =>
        Boolean(title)
    );

  return titles.length > 0
    ? titles.join(", ")
    : "-";
}

function getLanguageTitles(
  selectedLanguages: readonly string[]
) {
  const languageNames: Record<
    string,
    string
  > = {
    de: "German",
    en: "English",
    other: "Other",
  };

  const titles =
    selectedLanguages.map(
      (id) =>
        languageNames[id] ?? id
    );

  return titles.length > 0
    ? titles.join(", ")
    : "-";
}

function createServerQuote(
  quote: QuoteInput | undefined
) {
  /*
   * Явно используем string[].
   * Это предотвращает ошибку TypeScript,
   * если массивы конфигурации имеют as const.
   */

  const websiteIds: string[] =
    websiteTypes.map(
      (item) => item.id
    );

  const marketingIds: string[] =
    marketing.map(
      (item) => item.id
    );

  const brandingIds: string[] =
    branding.map(
      (item) => item.id
    );

  const featureIds: string[] =
    features.map(
      (item) => item.id
    );

  const supportIds: string[] =
    support.map(
      (item) => item.id
    );

  const allowedLanguageIds = [
    "de",
    "en",
    "other",
  ];

  /*
   * Проверяем выбранный пакет.
   * Object.hasOwn не позволяет использовать
   * унаследованные свойства объекта.
   */

  const requestedPackageId =
    isString(quote?.packageId) &&
    Object.hasOwn(
      packagePresets,
      quote.packageId
    )
      ? (quote.packageId as PackageId)
      : null;

  const preset =
    requestedPackageId
      ? packagePresets[
          requestedPackageId
        ]
      : null;

  /*
   * Проверяем тип сайта.
   */

  const requestedWebsiteId =
    isString(quote?.websiteId) &&
    websiteIds.includes(
      quote.websiteId
    )
      ? quote.websiteId
      : websiteTypes[0].id;

  /*
   * Если выбран готовый пакет,
   * сервер использует тип сайта
   * непосредственно из пакета.
   */

  const effectiveWebsiteId =
    preset &&
    websiteIds.includes(
      preset.website
    )
      ? preset.website
      : requestedWebsiteId;

  const selectedWebsite =
    websiteTypes.find(
      (item) =>
        item.id ===
        effectiveWebsiteId
    ) ?? websiteTypes[0];

  const isCustomWork =
    selectedWebsite.id ===
    "custom";

  /*
   * Для индивидуальной доработки
   * дополнительные услуги отключаются.
   * Стоимость будет рассчитываться
   * после изучения задачи.
   */

  const selectedLanguages =
    isCustomWork
      ? []
      : cleanIds(
          quote?.languages,
          allowedLanguageIds
        );

  if (
    !isCustomWork &&
    selectedLanguages.length === 0
  ) {
    selectedLanguages.push("de");
  }

  const selectedMarketing =
    isCustomWork
      ? []
      : cleanIds(
          quote?.marketing,
          marketingIds
        );

  const selectedBranding =
    isCustomWork
      ? []
      : cleanIds(
          quote?.branding,
          brandingIds
        );

  const selectedFeatures =
    isCustomWork
      ? []
      : cleanIds(
          quote?.features,
          featureIds
        );

  const selectedSupport =
    isCustomWork
      ? []
      : cleanIds(
          quote?.support,
          supportIds
        );

  const includedLanguages =
    preset?.languages ?? [];

  const includedMarketing =
    preset?.marketing ?? [];

  const includedFeatures =
    preset?.features ?? [];

  const includedSupport =
    preset?.support ?? [];

  /*
   * Цена всегда рассчитывается
   * на сервере. Значения total и
   * monthlyTotal от клиента не используются.
   */

  let total = isCustomWork
    ? 0
    : (preset?.price ??
      selectedWebsite.price);

  if (!isCustomWork) {
    const includedLanguageCount =
      preset
        ? Math.max(
            1,
            includedLanguages.length
          )
        : 1;

    const paidLanguageCount =
      Math.max(
        0,
        selectedLanguages.length -
          includedLanguageCount
      );

    total +=
      paidLanguageCount * 50;

    selectedMarketing.forEach(
      (id) => {
        const item =
          marketing.find(
            (
              marketingItem
            ) =>
              marketingItem.id ===
              id
          );

        if (
          item &&
          !includedMarketing.includes(
            id
          )
        ) {
          total += item.price;
        }
      }
    );

    selectedBranding.forEach(
      (id) => {
        const item =
          branding.find(
            (
              brandingItem
            ) =>
              brandingItem.id ===
              id
          );

        if (item) {
          total += item.price;
        }
      }
    );

    selectedFeatures.forEach(
      (id) => {
        const item =
          features.find(
            (
              featureItem
            ) =>
              featureItem.id ===
              id
          );

        if (
          item &&
          !includedFeatures.includes(
            id
          )
        ) {
          total += item.price;
        }
      }
    );
  }

  let monthlyTotal = 0;

  if (!isCustomWork) {
    selectedSupport.forEach(
      (id) => {
        const item =
          support.find(
            (
              supportItem
            ) =>
              supportItem.id ===
              id
          );

        if (
          item &&
          !includedSupport.includes(
            id
          )
        ) {
          monthlyTotal +=
            item.price;
        }
      }
    );
  }

  return {
    packageId:
      isCustomWork
        ? null
        : requestedPackageId,

    website: selectedWebsite,

    isCustomWork,

    languages:
      selectedLanguages,

    marketing:
      selectedMarketing,

    branding:
      selectedBranding,

    features:
      selectedFeatures,

    support:
      selectedSupport,

    total,

    monthlyTotal,
  };
}

export async function POST(
  request: Request
) {
  try {
    const contentType =
      request.headers.get(
        "content-type"
      );

    if (
      !contentType?.includes(
        "application/json"
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid content type",
        },
        {
          status: 415,
        }
      );
    }

    const requestBody: unknown =
      await request.json();

    if (!isObject(requestBody)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid request body",
        },
        {
          status: 400,
        }
      );
    }

    const body =
      requestBody as ContactRequest;

    const firstName =
      cleanText(
        body.firstName,
        100
      );

    const lastName =
      cleanText(
        body.lastName,
        100
      );

    const email = cleanText(
      body.email,
      254
    ).toLowerCase();

    const phone = cleanText(
      body.phone,
      50
    );

    const message = cleanText(
      body.message,
      3000
    );

    const budget = cleanText(
      body.budget,
      100
    );

    const timeline = cleanText(
      body.timeline,
      100
    );

    const language = cleanText(
      body.language,
      10
    );

    const turnstileToken =
      cleanText(
        body.turnstileToken,
        3000
      );

    if (
      !firstName ||
      !lastName ||
      !email
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Required fields are missing",
        },
        {
          status: 400,
        }
      );
    }

    const emailIsValid =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        email
      );

    if (!emailIsValid) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid email address",
        },
        {
          status: 400,
        }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Security verification required",
        },
        {
          status: 400,
        }
      );
    }

    const turnstileSecret =
      process.env
        .TURNSTILE_SECRET_KEY;

    const telegramBotToken =
      process.env
        .TELEGRAM_BOT_TOKEN;

    const telegramChatId =
      process.env
        .TELEGRAM_CHAT_ID;

    if (!turnstileSecret) {
      console.error(
        "TURNSTILE_SECRET_KEY is missing"
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Server configuration error",
        },
        {
          status: 500,
        }
      );
    }

    if (
      !telegramBotToken ||
      !telegramChatId
    ) {
      console.error(
        "Telegram environment variables are missing"
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Server configuration error",
        },
        {
          status: 500,
        }
      );
    }

    const forwardedFor =
      request.headers.get(
        "x-forwarded-for"
      );

    const visitorIp =
      forwardedFor
        ?.split(",")[0]
        ?.trim();

    const verificationBody =
      new URLSearchParams({
        secret:
          turnstileSecret,

        response:
          turnstileToken,
      });

    if (visitorIp) {
      verificationBody.set(
        "remoteip",
        visitorIp
      );
    }

    const verificationResponse =
      await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },

          body:
            verificationBody,

          signal:
            AbortSignal.timeout(
              8000
            ),

          cache: "no-store",
        }
      );

    if (
      !verificationResponse.ok
    ) {
      console.error(
        "Turnstile API request failed"
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Security verification unavailable",
        },
        {
          status: 503,
        }
      );
    }

    const verification =
      (await verificationResponse.json()) as TurnstileResponse;

    if (!verification.success) {
      console.warn(
        "Turnstile verification failed:",
        verification[
          "error-codes"
        ]
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Security verification failed",
        },
        {
          status: 403,
        }
      );
    }

    const quote =
      createServerQuote(
        body.quote
      );

    const packageName =
      quote.isCustomWork
        ? "Individual request"
        : quote.packageId
          ? quote.packageId.toUpperCase()
          : "Custom configuration";

    const websiteName =
      quote.website.title;

    const languageNames =
      getLanguageTitles(
        quote.languages
      );

    const marketingNames =
      getItemTitles(
        quote.marketing,
        marketing
      );

    const brandingNames =
      getItemTitles(
        quote.branding,
        branding
      );

    const featureNames =
      getItemTitles(
        quote.features,
        features
      );

    const supportNames =
      getItemTitles(
        quote.support,
        support
      );

    const calculatedPrice =
      quote.isCustomWork
        ? "Price on request"
        : `€${quote.total}`;

    const monthlyPrice =
      quote.isCustomWork
        ? "-"
        : `€${quote.monthlyTotal}`;

    const requestType =
      quote.isCustomWork
        ? "Changes to an existing website"
        : "New website";

    const telegramText = `
🚀 <b>New Website Request</b>

👤 <b>Name:</b>
${escapeTelegramHtml(firstName)} ${escapeTelegramHtml(lastName)}

📧 <b>Email:</b>
${escapeTelegramHtml(email)}

📱 <b>Phone:</b>
${escapeTelegramHtml(phone || "-")}

🌍 <b>Interface language:</b>
${escapeTelegramHtml(language || "-")}

━━━━━━━━━━━━━━

🧩 <b>Request type:</b>
${escapeTelegramHtml(requestType)}

📦 <b>Selected package:</b>
${escapeTelegramHtml(packageName)}

🖥 <b>Website type:</b>
${escapeTelegramHtml(websiteName)}

🌐 <b>Languages:</b>
${escapeTelegramHtml(languageNames)}

📈 <b>Marketing:</b>
${escapeTelegramHtml(marketingNames)}

🎨 <b>Branding:</b>
${escapeTelegramHtml(brandingNames)}

⚙️ <b>Features:</b>
${escapeTelegramHtml(featureNames)}

🛠 <b>Support:</b>
${escapeTelegramHtml(supportNames)}

💶 <b>Calculated price:</b>
${escapeTelegramHtml(calculatedPrice)}

🔄 <b>Monthly price:</b>
${escapeTelegramHtml(monthlyPrice)}

━━━━━━━━━━━━━━

💰 <b>Customer budget:</b>
${escapeTelegramHtml(budget || "-")}

⏳ <b>Timeline:</b>
${escapeTelegramHtml(timeline || "-")}

💸 <b>Flexible budget:</b>
${body.discount === true ? "Yes" : "No"}

📝 <b>Project details:</b>

${escapeTelegramHtml(message || "-")}
`.trim();

    const telegramUrl =
      `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    const telegramResponse =
      await fetch(
        telegramUrl,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            chat_id:
              telegramChatId,

            text:
              telegramText,

            parse_mode:
              "HTML",
          }),

          signal:
            AbortSignal.timeout(
              8000
            ),

          cache: "no-store",
        }
      );

    if (
      !telegramResponse.ok
    ) {
      const telegramError =
        await telegramResponse
          .text()
          .catch(() => "");

      console.error(
        "Telegram API error:",
        telegramResponse.status,
        telegramError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Message delivery failed",
        },
        {
          status: 502,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}