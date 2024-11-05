import React, { ReactNode } from "react";
import FieldErrors from "./FieldErrors";
import Group from "./Group";
import Input from "./Input";
import Label from "./Label";
import Row from "./Row";
import { SubmitButton } from "./SubmitButton";
import Textarea from "./Textarea";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  className?: string;
}

const Form = ({ children, className, ...props }: FormProps) => {
  return (
    <>
      <form
        className={`flex flex-col gap-10 max-sm:gap-5 group w-full ${className}`}
        role="form"
        {...props}
      >
        {children}
      </form>
    </>
  );
};

Form.Input = Input;
Form.Group = Group;
Form.Label = Label;
Form.Textarea = Textarea;
Form.Row = Row;
Form.SubmitButton = SubmitButton;
Form.FieldErrors = FieldErrors;

export default Form;
