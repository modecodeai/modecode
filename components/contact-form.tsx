"use client";

import { FormEvent, useState } from "react";
import { ButtonLink } from "@/components/button-link";

type ContactFormProps = {
  email: string;
};

type FormValues = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  projectType: "",
  message: ""
};

export function ContactForm({ email }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({
      ...current,
      [field]: value
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Mode Code enquiry: ${values.projectType}`;
    const body = [
      "New Mode Code enquiry",
      "",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Project type: ${values.projectType}`,
      "",
      "What needs to work better?",
      values.message
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      aria-label="Project enquiry"
      className="border border-graphite-200 bg-white/80 p-5 shadow-soft sm:p-8"
      onSubmit={handleSubmit}
    >
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

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          className="inline-flex min-h-12 items-center justify-center bg-graphite-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-graphite-800 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          type="submit"
        >
          Send enquiry
        </button>
        <ButtonLink href={`mailto:${email}`} variant="secondary">
          Email directly
        </ButtonLink>
      </div>
    </form>
  );
}
