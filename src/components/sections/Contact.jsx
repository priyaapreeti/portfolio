"use client";

import React, { useState } from "react";
import { CheckCircle, PaperPlaneRight, WarningCircle } from "@phosphor-icons/react";

const Contact = () => {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "loading", message: "Sending message..." });

    const formData = new FormData(event.target);
    formData.append("access_key", "a49a5d5c-b857-4de3-b76d-0b9653fe448d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Thanks for reaching out! I’ll get back to you soon.",
        });
        event.target.reset();
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-3xl mx-auto py-16 px-5 lg:px-6 scroll-mt-24"
    >
      {/* Section Header */}
      <p className="text-center text-sm sm:text-base font-ovo uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
        Get in touch
      </p>
      <h2 className="text-3xl sm:text-5xl font-ovo text-center text-gray-900 dark:text-white mb-4">
        Connect with me
      </h2>
      <p className="text-center max-w-xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-10">
        Have a question, project idea, or role in mind? Drop a message below—I’d
        love to connect.
      </p>

      {/* Contact Form */}
      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-300 dark:border-white/15 bg-white/80 dark:bg-white/[0.04] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-white/40 transition-colors"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-300 dark:border-white/15 bg-white/80 dark:bg-white/[0.04] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-white/40 transition-colors"
          />
        </div>

        <textarea
          name="message"
          required
          rows={5}
          placeholder="Write your message..."
          className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-300 dark:border-white/15 bg-white/80 dark:bg-white/[0.04] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-white/40 transition-colors resize-none"
        />

        <div className="mt-6 flex flex-col items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-ovo text-sm sm:text-base inline-flex items-center gap-2.5 hover:bg-gray-800 dark:hover:bg-gray-100 hover:-translate-y-0.5 active:scale-95 disabled:opacity-60 disabled:pointer-events-none transition-all duration-200 cursor-pointer shadow-sm"
          >
            {isSubmitting ? "Sending..." : "Send message"}
            <PaperPlaneRight size={18} />
          </button>

          {status.message && (
            <p
              className={`mt-4 text-sm inline-flex items-center gap-1.5 ${
                status.type === "success"
                  ? "text-emerald-600 dark:text-emerald-400"
                  : status.type === "error"
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {status.type === "success" && <CheckCircle size={17} weight="fill" />}
              {status.type === "error" && <WarningCircle size={17} weight="fill" />}
              <span>{status.message}</span>
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;
