"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
};

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data: FormData) => {
    // bot check
    if (data.honeypot) return;

    setSubmitState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSubmitState("success");
        reset();
      } else {
        setSubmitState("error");
        setErrorMsg(result.error || "Something went wrong");
      }
    } catch (err) {
      setSubmitState("error");
      setErrorMsg("Network error");
      console.error(err);
    }
  };

  return (
    <div className="bg-none font-xs text-black font-normal my-12">
      {submitState === "success" ? (
        <div className="w-full h-full flex flex-col gap-4">
          Thank you for contacting us — someone from our team will reach out
          shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="name" className="block text-base">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className={`w-full h-8 border-b-[1px] outline-none focus:border-blue focus:shadow-lg ${
                errors.name ? "border-red-500" : ""
              }`}
              {...register("name", { required: "Full name is required" })}
            />
            <div className="h-5">
              {errors.name && (
                <p className="text-red-500 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="block">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className={`w-full h-8 border-b-[1px] outline-none focus:border-blue focus:shadow-lg ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            <div className="h-5">
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="mb-5">
            <label htmlFor="subject" className="block">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full h-8 border-b-[1px] outline-none focus:border-blue focus:shadow-lg"
              {...register("subject")}
            />
          </div>

          {/* Message */}
          <div className="mb-5">
            <label htmlFor="message" className="block">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              className="w-full h-8 border-b-[1px] outline-none focus:border-blue focus:shadow-lg"
              {...register("message", {
                required: "Please enter a message",
                minLength: {
                  value: 8,
                  message: "Message should be at least 8 characters",
                },
                maxLength: {
                  value: 128,
                  message: 'max 128 charachters',
                },
              })}
            />
            <div className="h-5">
              {errors.message && (
                <p className="text-red-500 text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          {/* Honeypots */}
          <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
            <input
              type="text"
              {...register("honeypot")}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="hidden" aria-hidden="true">
            <input type="email" {...register("honeypot")} tabIndex={-1} />
          </div>
          <div className="h-5">
            {submitState === "error" && (
              <p className="text-red-500">{errorMsg}</p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitState === "loading"}
              className="hover:shadow-form bg-blue p-3 font-semibold text-white outline-none disabled:opacity-50"
            >
              {submitState === "loading" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
