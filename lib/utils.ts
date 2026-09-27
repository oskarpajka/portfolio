import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface MailtoOptions {
  subject?: string;
  body?: string;
}

// Build a mailto: link with safely encoded subject/body params.
// Use siteData.personal.email + siteData.contact.emailSubject with buildContactMailto for the contact CTA.
export function buildMailto(email: string, options: MailtoOptions = {}): string {
  const params = new URLSearchParams();
  const subject = options.subject?.trim();
  const body = options.body?.trim();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return query ? `mailto:${email}?${query}` : `mailto:${email}`;
}

// Contact CTA mailto link. Pass siteData.personal.email and
// siteData.contact.emailSubject to wire it into the contact section.
export function buildContactMailto(email: string, subject: string, body?: string): string {
  return buildMailto(email, {
    subject,
    ...(body?.trim() ? { body: body.trim() } : {}),
  });
}
