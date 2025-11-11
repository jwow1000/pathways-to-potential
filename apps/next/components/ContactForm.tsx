"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

// import { sendEmail } from '@/app/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  insurance: string;
  insuranceId?: string;
  honeypot: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data: FormData) => {
    setSubmitState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
        }),
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
    }
  };

  return (
    <div className="bg-none font-xs text-black font-normal">
      {submitState === "success" ? (
        <div className="w-full h-full flex-column gap-20">
          {`thank you for contacting us someone from our team will reach out shortly.`}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border-b-[1px] outline-none focus:outline-blue focus:border-blue focus:shadow-lg"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border-b-[1px] outline-none focus:border-blue focus:shadow-lg"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="mb-3 block">
              Message
            </label>
            <textarea
              rows={3}
              className="w-full border-b-[1px] outline-none focus:border-blue focus:shadow-lg"
              {...register("message", { required: false })}
            ></textarea>
          </div>
          <div className="mb-5">
            <label htmlFor="subject" className="mb-3 block">
              Subject
            </label>

            <input
              type="text"
              className="w-full border-b-[1px] outline-none focus:border-blue focus:shadow-lg"
              {...register("message", { required: false })}
            ></input>
          </div>
          <div className="mb-5">
            <label htmlFor="insurance" className="mb-3 block">
              Insurance
            </label>
            <input
              type="text"
              className="w-full border-b-[1px] outline-none focus:border-blue focus:shadow-lg"
              {...register("message", { required: false })}
            ></input>
          </div>
          <div className="mb-5">
            <label htmlFor="insuranceId" className="mb-3 block">
              Insurance ID
            </label>
            <input
              type="text"
              className="w-full border-b-[1px] outline-none focus:border-blue focus:shadow-lg"
              {...register("message", { required: false })}
            ></input>
          </div>

          {/* two honeypots with different hiding methods */}
          <div
            style={{ position: "absolute", left: "-9999px" }}
            aria-hidden="true"
          >
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

          {submitState === "error" && (
            <p className="text-red-500">{errorMsg}</p>
          )}

          <div className="flex justify-end">
            <button className="hover:shadow-form bg-blue p-3 font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
