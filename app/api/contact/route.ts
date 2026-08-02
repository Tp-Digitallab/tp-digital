import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      budget,
      timeline,
      discount,
    } = body;

    const text = `
🚀 <b>New Website Request</b>

👤 <b>Name:</b>
${firstName} ${lastName}

📧 <b>Email:</b>
${email}

📱 <b>Phone:</b>
${phone || "-"}

💰 <b>Budget:</b>
${budget || "-"}

⏳ <b>Timeline:</b>
${timeline || "-"}

💸 <b>Flexible Budget:</b>
${discount ? "Yes" : "No"}

📝 <b>Project Details:</b>

${message || "-"}
`;

    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    });

    if (!telegramResponse.ok) {
      throw new Error("Telegram API error");
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}