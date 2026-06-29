type ContactEnv = {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_REPLY_TO_EMAIL?: string;
};

type PagesFunctionContext = {
  request: Request;
  env: ContactEnv;
};

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  business?: unknown;
  projectType?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown;
};

const resendEndpoint = "https://api.resend.com/emails";
const maxFieldLength = 200;
const maxMessageLength = 4000;

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  });
}

function readText(value: unknown, maxLength = maxFieldLength) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailText(fields: {
  name: string;
  email: string;
  business: string;
  projectType: string;
  budget: string;
  message: string;
}) {
  return [
    "New Mode Code enquiry",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    fields.business ? `Business: ${fields.business}` : "",
    fields.projectType ? `Project type: ${fields.projectType}` : "",
    fields.budget ? `Budget: ${fields.budget}` : "",
    "",
    "Message:",
    fields.message
  ]
    .filter(Boolean)
    .join("\n");
}

function buildEmailHtml(fields: {
  name: string;
  email: string;
  business: string;
  projectType: string;
  budget: string;
  message: string;
}) {
  const optionalRows = [
    fields.business ? `<p><strong>Business:</strong> ${escapeHtml(fields.business)}</p>` : "",
    fields.projectType
      ? `<p><strong>Project type:</strong> ${escapeHtml(fields.projectType)}</p>`
      : "",
    fields.budget ? `<p><strong>Budget:</strong> ${escapeHtml(fields.budget)}</p>` : ""
  ]
    .filter(Boolean)
    .join("");

  return [
    "<h1>New Mode Code enquiry</h1>",
    `<p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>`,
    optionalRows,
    "<p><strong>Message:</strong></p>",
    `<p>${escapeHtml(fields.message).replace(/\n/g, "<br />")}</p>`
  ].join("");
}

export async function onRequestPost({
  request,
  env
}: PagesFunctionContext): Promise<Response> {
  const resendApiKey = readText(env.RESEND_API_KEY, 500);
  const toEmail = readText(env.CONTACT_TO_EMAIL);
  const fromEmail = readText(env.CONTACT_FROM_EMAIL);
  const fallbackReplyToEmail = readText(env.CONTACT_REPLY_TO_EMAIL);

  if (!resendApiKey || !toEmail || !fromEmail || !fallbackReplyToEmail) {
    console.error("Contact function is missing required environment variables.");
    return jsonResponse({ ok: false, error: "Contact service is not configured." }, 500);
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ ok: false, error: "Invalid request body." }, 400);
  }

  const honeypot = readText(payload.website);

  if (honeypot) {
    return jsonResponse({ ok: true });
  }

  const fields = {
    name: readText(payload.name),
    email: readText(payload.email),
    business: readText(payload.business),
    projectType: readText(payload.projectType),
    budget: readText(payload.budget),
    message: readText(payload.message, maxMessageLength)
  };

  if (!fields.name || !fields.email || !fields.message) {
    return jsonResponse(
      { ok: false, error: "Name, email and message are required." },
      400
    );
  }

  if (!isValidEmail(fields.email)) {
    return jsonResponse({ ok: false, error: "Enter a valid email address." }, 400);
  }

  const resendResponse = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      authorization: `Bearer ${resendApiKey}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: fields.email || fallbackReplyToEmail,
      subject: `New Mode Code enquiry from ${fields.name}`,
      text: buildEmailText(fields),
      html: buildEmailHtml(fields)
    })
  });

  if (!resendResponse.ok) {
    console.error("Resend contact email request failed.");
    return jsonResponse({ ok: false, error: "Message could not be sent." }, 502);
  }

  return jsonResponse({ ok: true });
}

export function onRequestOptions(): Response {
  return jsonResponse({ ok: true });
}
