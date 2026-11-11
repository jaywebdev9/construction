"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide a short message"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-sm border border-amber/30 bg-amber-50 p-6 text-center">
        <p className="font-medium text-charcoal">Message received (demo)</p>
        <p className="mt-2 text-sm text-charcoal/70">
          This is a frontend simulation. No data was sent to a server.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-ghost mt-4"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          id="name"
          className="input-field mt-1.5"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="input-field mt-1.5"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="phone" className="label">
          Phone <span className="text-charcoal/40">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          className="input-field mt-1.5"
          {...register("phone")}
        />
      </div>
      <div>
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="input-field mt-1.5 min-h-[120px] resize-y"
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>
      <button type="submit" className="btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
