import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";


import {
  User,
  Mail,
  Phone,
  Building2,
  FileText,
} from "lucide-react";

import { useState } from "react";

interface Props {
  back: () => void;
}

export default function ContactStep({
  back,
}: Props) {
  const { language } = useLanguage();

const t = translations[language];

  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [discount, setDiscount] = useState(false);
  const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState(""); 
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");
const router = useRouter();

const [errors, setErrors] = useState({
  firstName: "",
  lastName: "",
  email: "",
});

function validate() {
  const newErrors = {
    firstName: "",
    lastName: "",
    email: "",
  };

  let valid = true;

  if (!firstName.trim()) {
    newErrors.firstName = "First name is required.";
    valid = false;
  }

  if (!lastName.trim()) {
    newErrors.lastName = "Last name is required.";
    valid = false;
  }

  if (!email.trim()) {
    newErrors.email = "Email is required.";
    valid = false;
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    newErrors.email = "Please enter a valid email.";
    valid = false;
  }

  setErrors(newErrors);

  return valid;
}

async function handleSubmit() {
  if (!validate()) return;

  const formData = {
    firstName,
    lastName,
    email,
    phone,
    message,
    budget,
    timeline,
    discount,
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send request");
    }

    router.push("/thank-you");
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
}



  return (
    <section>
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-400">
        {t.calculatorSteps.contact.step}
      </p>

      <h2 className="text-5xl font-semibold text-white">
         {t.calculatorSteps.contact.title}
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
        {t.calculatorSteps.contact.description}
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">


{/* First Name */}

<div className="relative">

  <User
    size={20}
    className="absolute left-5 top-1/2 -translate-y-1/2 text-white/25"
  />

  <input
  value={firstName}
  onChange={(e) => {
  setFirstName(e.target.value);

  if (errors.firstName) {
    setErrors({
      ...errors,
      firstName: "",
    });
  }
}}
  placeholder={t.calculatorSteps.contact.firstName}
  className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] py-5 pl-14 pr-6 text-white placeholder:text-white/30 outline-none transition-all duration-300 hover:border-white/20 focus:border-blue-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
/>

{errors.firstName && (
  <p className="mt-2 ml-2 text-sm text-red-400">
    {errors.firstName}
  </p>
)}

</div>

{/* Last Name */}

<div className="relative">

  <User
    size={20}
    className="absolute left-5 top-1/2 -translate-y-1/2 text-white/25"
  />

  <input
  value={lastName}
  onChange={(e) => {
  setLastName(e.target.value);

  if (errors.lastName) {
    setErrors({
      ...errors,
      lastName: "",
    });
  }
}}
  placeholder={t.calculatorSteps.contact.lastName}
  className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] py-5 pl-14 pr-6 text-white placeholder:text-white/30 outline-none transition-all duration-300 hover:border-white/20 focus:border-blue-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
/>

{errors.lastName && (
  <p className="mt-2 ml-2 text-sm text-red-400">
    {errors.lastName}
  </p>
)}

</div>

{/* Email */}

<div className="relative">

  <Mail
    size={20}
    className="absolute left-5 top-1/2 -translate-y-1/2 text-white/25"
  />

 <input
  value={email}
  onChange={(e) => {
  setEmail(e.target.value);

  if (errors.email) {
    setErrors({
      ...errors,
      email: "",
    });
  }
}}
  placeholder={t.calculatorSteps.contact.email}
  className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] py-5 pl-14 pr-6 text-white placeholder:text-white/30 outline-none transition-all duration-300 hover:border-white/20 focus:border-blue-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
/>

{errors.email && (
  <p className="mt-2 ml-2 text-sm text-red-400">
    {errors.email}
  </p>
)}

</div>

{/* Phone */}

<div className="relative md:col-span-2">

  <Phone
    size={20}
    className="absolute left-5 top-1/2 -translate-y-1/2 text-white/25"
  />

  <input
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  placeholder={t.calculatorSteps.contact.phone}
  className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] py-5 pl-14 pr-6 text-white placeholder:text-white/30 outline-none transition-all duration-300 hover:border-white/20 focus:border-blue-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
/>

</div>

{/* ================= Budget ================= */}

<div className="md:col-span-2">

  <p className="mb-5 text-lg font-semibold text-white">
    {t.calculatorSteps.contact.budget}
  </p>

  <div className="grid gap-4 sm:grid-cols-2">

    {[
      "Under €500",
      "€500 – €1,000",
      "€1,000 – €2,500",
      "I'm not sure yet",
    ].map((item) => {

      const active = budget === item;

      return (

        <button
          key={item}
          type="button"
          onClick={() => setBudget(item)}
          className={`
            rounded-[22px]

            border

            p-5

            text-left

            transition-all
            duration-300

            ${
              active
                ? `
                  border-blue-400/40
                  bg-blue-500/10

                  shadow-[0_15px_40px_rgba(59,130,246,0.18)]
                `
                : `
                  border-white/10
                  bg-white/[0.03]

                  hover:border-white/20
                  hover:bg-white/[0.05]
                `
            }
          `}
        >

          <div className="flex items-center justify-between">

            <span className={active ? "text-white" : "text-white/65"}>
              {item}
            </span>

            <div
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                border

                ${
                  active
                    ? "border-blue-400 bg-blue-500 text-white"
                    : "border-white/15 text-white/20"
                }
              `}
            >
              ✓
            </div>

          </div>

        </button>

      );

    })}

  </div>

</div>




{/* ================= Timeline ================= */}

<div className="md:col-span-2">

  <p className="mb-5 text-lg font-semibold text-white">
    {t.calculatorSteps.contact.timeline}
  </p>

  <div className="grid gap-4 sm:grid-cols-2">

    {[
      "As soon as possible",
      "Within 1 month",
      "1–3 months",
      "Flexible",
    ].map((item) => {

      const active = timeline === item;

      return (

        <button
          key={item}
          type="button"
          onClick={() => setTimeline(item)}
          className={`
            rounded-[22px]
            border
            p-5
            text-left
            transition-all
            duration-300
            ${
              active
                ? `
                  border-blue-400/40
                  bg-blue-500/10
                  shadow-[0_15px_40px_rgba(59,130,246,0.18)]
                `
                : `
                  border-white/10
                  bg-white/[0.03]

                  hover:border-white/20
                  hover:bg-white/[0.05]
                `
            }
          `}
        >

          <div className="flex items-center justify-between">

            <span className={active ? "text-white" : "text-white/65"}>
              {item}
            </span>

            <div
             className={`
  flex
  h-10
  w-10
  items-center
  justify-center

  rounded-full

  border

  ${
    active
      ? "border-blue-400 bg-blue-500 text-white"
      : "border-white/15 text-white/20"
  }
`}

            >
              ✓
            </div>

          </div>

        </button>

      );

    })}

  </div>

</div>




{/* ================= Affordable ================= */}

<div
  onClick={() => setDiscount(!discount)}
  className="
    md:col-span-2

    cursor-pointer

    rounded-[22px]

    border
    border-white/10

    bg-white/[0.03]

    p-5

    transition-all
    duration-300

    hover:border-white/20
    hover:bg-white/[0.05]
  "
>

  <div className="flex items-center justify-between">

    <div>

      <p className="font-medium text-white">
        {t.calculatorSteps.contact.flexible}
      </p>

      <p className="mt-1 text-sm text-white/50">
        {t.calculatorSteps.contact.flexibleDescription}
      </p>

    </div>

    <div
      className={`
        flex
        h-10
        w-10
        items-center
        justify-center

        rounded-full

        border

        ${
          discount
            ? "border-blue-400 bg-blue-500 text-white"
            : "border-white/15 text-white/20"
        }
      `}
    >
      ✓
    </div>

  </div>

</div>

{/* ================= Project Details ================= */}

<div className="relative md:col-span-2">

  <FileText
    size={20}
    className="
      absolute
      left-5
      top-6
      text-white/25
    "
  />

  <textarea
  rows={6}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder={t.calculatorSteps.contact.message}
  className="
    w-full

    rounded-[22px]

    border
    border-white/10

    bg-white/[0.03]

    py-5
    pl-14
    pr-6

    text-white

    placeholder:text-white/30

    outline-none

    transition-all
    duration-300

    hover:border-white/20

    focus:border-blue-400/50
    focus:bg-white/[0.05]

    focus:shadow-[0_0_25px_rgba(59,130,246,0.15)]
  "
/>
</div>

      </div>
      <div className="mt-14 flex items-center justify-between">

  <button
    onClick={back}
    className="
      rounded-full
      border
      border-white/10
      px-8
      py-4
      text-white
      transition
      hover:bg-white/5
    "
  >
    ← {t.calculatorSteps.contact.back}
  </button>

  <button
  onClick={handleSubmit}
  className="
group
inline-flex
items-center
justify-center

rounded-full

bg-blue-500

px-10
py-5

font-semibold
text-white

shadow-[0_12px_35px_rgba(59,130,246,0.25)]

transition-all
duration-300

hover:bg-blue-400
hover:shadow-[0_18px_45px_rgba(59,130,246,0.35)]

active:scale-[0.98]
"
>
  {t.calculatorSteps.contact.submit} →
</button>

</div>
    </section>
  );
}