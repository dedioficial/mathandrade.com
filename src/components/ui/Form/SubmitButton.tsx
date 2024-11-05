"use client";

import { useFormStatus } from "react-dom";
import { CgSpinner } from "react-icons/cg";
import Button, { ButtonProps } from "../Button";

export function SubmitButton({ children, ...props }: ButtonProps) {
  const { pending } = useFormStatus();

  if (pending)
    return (
      <CgSpinner className="animate-spin inline text-3xl text-primary m-auto" />
    );

  return (
    <Button type="submit" {...props}>
      {children}
    </Button>
  );
}
