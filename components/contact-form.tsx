"use client";

import { FormEvent, useState } from "react";
import { ButtonLink } from "@/components/button-link";

type ContactFormProps = {
  email: string;
};

type FormValues = {
  name: string;
  email: string;
  business: string;
  projectType: string;
  budget: string;
  message: string;
  website: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  business: "",
  projectType: "",
  budget: "",
  message: "",
  website: ""
};

export function ContactForm({ email }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({
      ...current,
      [field]: value
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Message could not be sent.");
      }

      setValues(initialValues);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Message could not be sent. Please email directly."
      );
    }
  }

  return (
    <form
      aria-label="Project enquiry"
      className="border border-graphite-200 bg-white/80 p-5 shadow-soft sm:p-8"
      onSubmit={handleSubmit}
    >
      <label className="sr-only" aria-hidden="true">
        Website
        <input
          autoComplete="off"
          name="website"
          onChange={(event) => updateValue("website", event.target.value)}
          tabIndex={-1}
          type="text"
          value={values.website}
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-graphite-800">Name</span>
          <input
            autoComplete="name"
            className="mt-2 w-full border border-graphite-200 bg-white px-4 py-3 text-base text-graphite-950 outline-none transition focus:border-accent"
            name="name"
            onChange={(event) => updateValue("name", event.target.value)}
            required
            type="text"
            value={values.name}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-graphite-800">Email</span>
          <input
            autoComplete="email"
            className="mt-2 w-full border border-graphite-200 bg-white px-4 py-3 text-base text-graphite-950 outline-none transition focus:border-accent"
            name="email"
            onChange={(event) => updateValue("email", event.target.value)}
            required
            type="email"
            value={values.email}
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-medium text-graphite-800">
          Business
        </span>
        <input
          autoComplete="organization"
          className="mt-2 w-full border border-graphite-200 bg-white px-4 py-3 text-base text-graphite-950 outline-none transition focus:border-accent"
          name="business"
          onChange={(event) => updateValue("business", event.target.value)}
          type="text"
          value={values.business}
        />
      </label>

      <label className="mt-5 block">
        <span className="text-sm font-medium text-graphite-800">
          Project type
        </span>
        <select
          className="mt-2 w-full border border-graphite-200 bg-white px-4 py-3 text-base text-graphite-950 outline-none transition focus:border-accent"
          name="projectType"
          onChange={(event) => updateValue("projectType", event.target.value)}
          required
          value={values.projectType}
        >
          <option value="" disabled>
            Select one
          </option>
          <option>Website</option>
          <option>AI tool</option>
          <option>Automation</option>
          <option>MVP</option>
          <option>Design for Manufacturing</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <label className="mt-5 block">
        <span className="text-sm font-medium text-graphite-800">
          Budget
        </span>
        <input
          className="mt-2 w-full border border-graphite-200 bg-white px-4 py-3 text-base text-graphite-950 outline-none transition focus:border-accent"
          name="budget"
          onChange={(event) => updateValue("budget", event.target.value)}
          type="text"
          value={values.budget}
        />
      </label>

      <label className="mt-5 block">
        <span className="text-sm font-medium text-graphite-800">
          What needs to work better?
        </span>
        <textarea
          className="mt-2 min-h-40 w-full resize-y border border-graphite-200 bg-white px-4 py-3 text-base text-graphite-950 outline-none transition focus:border-accent"
          name="message"
          onChange={(event) => updateValue("message", event.target.value)}
          required
          value={values.message}
        />
      </label>

      {status === "success" ? (
        <p className="mt-5 border border-graphite-200 bg-graphite-50 px-4 py-3 text-sm text-graphite-700">
          Message sent. Mode Code will reply shortly.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="mt-5 border border-graphite-200 bg-white px-4 py-3 text-sm text-graphite-700">
          {errorMessage}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          className="inline-flex min-h-12 items-center justify-center bg-graphite-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-graphite-800 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-graphite-500"
          disabled={status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? "Sending" : "Send enquiry"}
        </button>
        <ButtonLink href={`mailto:${email}`} variant="secondary">
          Email directly
        </ButtonLink>
      </div>
    </form>
  );
}
