"use client";

import Form from "@/components/ui/Form";
import { useActionState } from "react";
import { LuMailCheck, LuMailX } from "react-icons/lu";
import { onFormSubmit } from "../../../../actions/formSubmit";

type translationKey = {
  label: string;
  placeholder: string;
};

type mailResponse = {
  title: string;
  message: string;
};

export interface ContactFormProps {
  translation: {
    name: translationKey;
    email: translationKey;
    subject: translationKey;
    button: string;
    success: mailResponse;
    error: mailResponse;
    formAria: string;
  };
}

const ContactForm = ({ translation }: ContactFormProps) => {
  const [state, formAction] = useActionState(onFormSubmit, undefined);

  return (
    <>
      {state?.status === 200 && (
        <div
          className="max-w-5xl m-auto w-full p-4 text-center flex flex-col gap-5"
          aria-live="polite"
          id="formSuccessMessage"
        >
          <LuMailCheck className="text-emerald-600 text-[120px] m-auto" />

          <p>{translation.success.title}</p>
          <p>{translation.success.message}</p>
        </div>
      )}

      {state?.status === 500 && (
        <div
          className="max-w-5xl m-auto w-full p-4 text-center flex flex-col gap-5"
          aria-live="polite"
          id="formErrorMessage"
        >
          <LuMailX className="text-red-600 text-[120px] m-auto" />

          <p>{translation.error.title}</p>
          <p>{translation.error.message}</p>
          <a
            href="mailto:matheus.n.andrade@hotmail.com"
            className="text-primary text-xl underline"
          >
            matheus.n.andrade@hotmail.com
          </a>
        </div>
      )}

      {(!state || state.status === 400) && (
        <Form
          className="max-w-5xl m-auto"
          action={formAction}
          noValidate
          id="contactForm"
          aria-label={translation.formAria}
        >
          <Form.Row>
            <Form.Group>
              <Form.Label htmlFor="name">{translation.name.label}</Form.Label>
              <Form.Input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                aria-required="true"
                isInvalid={!!state?.fields?.name}
                placeholder={translation.name.placeholder}
              />
              <Form.FieldErrors errors={state?.fields?.name} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">{translation.email.label}</Form.Label>
              <Form.Input
                type="text"
                id="email"
                name="email"
                autoComplete="email"
                required
                aria-required="true"
                isInvalid={!!state?.fields?.email}
                placeholder={translation.email.placeholder}
              />
              <Form.FieldErrors errors={state?.fields?.email} />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label htmlFor="subject">
              {translation.subject.label}
            </Form.Label>
            <Form.Textarea
              id="subject"
              name="subject"
              autoComplete="subject"
              isInvalid={!!state?.fields?.subject}
              placeholder={translation.subject.placeholder}
            />
            <Form.FieldErrors errors={state?.fields?.subject} />
          </Form.Group>

          <Form.SubmitButton className="w-fit m-auto">
            {translation.button}
          </Form.SubmitButton>
        </Form>
      )}
    </>
  );
};

export default ContactForm;
