"use server";

import initTranslations from "@/locales/i18n";
import nodemailer, { TransportOptions } from "nodemailer";
import { z } from "zod";
import { DetailedError } from "./CustomError";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
}

export async function onFormSubmit(_: unknown, data: FormData) {
  const { t } = await initTranslations(["contactForm"]);

  const stringRequired = z
    .string({ required_error: t("fieldErrors.required") })
    .trim()
    .min(1, t("fieldErrors.required"));

  const contactFormSchema = z.object({
    name: stringRequired,
    email: stringRequired,
    subject: z.string(),
  });

  const jsonData = Object.fromEntries(data) as unknown as ContactFormData;

  const result = contactFormSchema.safeParse(jsonData);

  if (!result.success)
    return {
      status: 400,
      fields: result.error.flatten().fieldErrors,
    };

  const emailEnv = {
    host: process.env.EMAIL_HOST ?? "",
    port: process.env.EMAIL_PORT ?? "",
    username: process.env.EMAIL_USERNAME ?? "",
    password: process.env.EMAIL_PASSWORD ?? "",
    to: process.env.EMAIL_CONTACT_TO ?? "",
  };

  const transporter = nodemailer.createTransport({
    host: emailEnv.host,
    port: emailEnv.port,
    secure: true,
    auth: {
      user: emailEnv.username,
      pass: emailEnv.password,
    },
  } as TransportOptions);

  const mailOptions = {
    from: jsonData.email,
    to: emailEnv.username,
    subject: t("emailBody.subject"),
    text: `Email: ${jsonData.email}\n\rSubject: ${jsonData.subject ?? ""}`,
  };

  try {
    const emailStatus = await transporter.sendMail(mailOptions);

    if (emailStatus.rejected.length > 0)
      throw new DetailedError("Fail to send email", emailStatus);

    return {
      status: 200,
      fields: null,
      to: emailEnv.to,
    };
  } catch (e: unknown) {
    console.error({ message: "Fail to send email", details: e });

    return {
      status: 500,
      fields: null,
    };
  }
}
