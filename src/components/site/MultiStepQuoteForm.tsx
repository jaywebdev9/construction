"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(6, "Required"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Select a type"),
  location: z.string().min(2, "Required"),
  scope: z.string().min(10, "Please describe the scope"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const steps = ["Contact", "Project", "Scope", "Review"];

export function MultiStepQuoteForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [ref, setRef] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      projectType: "",
    },
  });

  const next = async () => {
    const fields: (keyof FormData)[][] = [
      ["name", "email", "phone"],
      ["projectType", "location"],
      ["scope"],
    ];
    const ok = await trigger(fields[step]);
    if (ok) setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setRef(`DEMO-${Date.now().toString(36).toUpperCase()}`);
    setDone(true);
  };

  if (done) {
    return (
      <div className="card-surface p-8 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber">
          Demo submission
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold">
          Request received
        </h2>
        <p className="mt-3 text-charcoal/70">
          Your demo reference number is{" "}
          <strong className="text-charcoal">{ref}</strong>. No data was sent to
          a server.
        </p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setStep(0);
          }}
          className="btn-secondary mt-6"
        >
          Start another request
        </button>
      </div>
    );
  }

  const values = getValues();

  return (
    <div className="card-surface p-6 sm:p-8">
      <div className="mb-8 flex gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex-1">
            <div
              className={cn(
                "h-1 rounded-full transition-colors",
                i <= step ? "bg-amber" : "bg-concrete"
              )}
            />
            <p
              className={cn(
                "mt-2 text-xs font-medium",
                i === step ? "text-charcoal" : "text-charcoal/40"
              )}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {step === 0 && (
          <div className="space-y-4">
            <div>
              <label className="label" htmlFor="name">
                Full name
              </label>
              <input id="name" className="input-field mt-1.5" {...register("name")} />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input-field mt-1.5"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="label" htmlFor="phone">
                Phone
              </label>
              <input id="phone" className="input-field mt-1.5" {...register("phone")} />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <label className="label" htmlFor="company">
                Company <span className="text-charcoal/40">(optional)</span>
              </label>
              <input
                id="company"
                className="input-field mt-1.5"
                {...register("company")}
              />
            </div>
          </div>
        )}

        
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="label" htmlFor="projectType">
                Project type
              </label>
              <select
                id="projectType"
                className="input-field mt-1.5"
                {...register("projectType")}
              >
                <option value="">Select…</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="renovation">Renovation</option>
                <option value="other">Other</option>
              </select>
              {errors.projectType && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.projectType.message}
                </p>
              )}
            </div>
            <div>
              <label className="label" htmlFor="location">
                Project location
              </label>
              <input
                id="location"
                className="input-field mt-1.5"
                {...register("location")}
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.location.message}
                </p>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="label" htmlFor="scope">
                Project scope
              </label>
              <textarea
                id="scope"
                rows={5}
                className="input-field mt-1.5 min-h-[120px] resize-y"
                placeholder="Describe the works, approximate size, and any constraints…"
                {...register("scope")}
              />
              {errors.scope && (
                <p className="mt-1 text-sm text-red-600">{errors.scope.message}</p>
              )}
            </div>
            <div>
              <label className="label" htmlFor="budget">
                Budget range <span className="text-charcoal/40">(optional)</span>
              </label>
              <input
                id="budget"
                className="input-field mt-1.5"
                placeholder="e.g. To be discussed"
                {...register("budget")}
              />
            </div>
            <div>
              <label className="label" htmlFor="timeline">
                Desired timeline{" "}
                <span className="text-charcoal/40">(optional)</span>
              </label>
              <input
                id="timeline"
                className="input-field mt-1.5"
                placeholder="e.g. Q3 2025"
                {...register("timeline")}
              />
            </div>
            <p className="text-xs text-charcoal/50">
              Document upload UI is simulated in this demo. File storage is not
              connected.
            </p>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3 text-sm">
            <h3 className="font-display text-lg font-semibold">Review</h3>
            <dl className="space-y-2 border border-concrete/50 bg-offwhite p-4">
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/50">Name</dt>
                <dd className="font-medium">{values.name}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/50">Email</dt>
                <dd className="font-medium">{values.email}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/50">Phone</dt>
                <dd className="font-medium">{values.phone}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/50">Type</dt>
                <dd className="font-medium capitalize">{values.projectType}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/50">Location</dt>
                <dd className="font-medium">{values.location}</dd>
              </div>
              <div>
                <dt className="text-charcoal/50">Scope</dt>
                <dd className="mt-1 font-medium">{values.scope}</dd>
              </div>
            </dl>
            <p className="text-xs text-charcoal/50">
              Submitting will only show a demo success state. No email or CRM
              integration.
            </p>
          </div>
        )}

        <div className="mt-8 flex justify-between gap-4">
          <button
            type="button"
            onClick={back}
            className="btn-ghost"
            disabled={step === 0}
          >
            Back
          </button>
          {step < steps.length - 1 ? (
            <button type="button" onClick={next} className="btn-primary">
              Continue
            </button>
          ) : (
            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting…" : "Submit request"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

