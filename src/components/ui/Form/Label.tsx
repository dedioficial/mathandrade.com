"use client";

import { ReactNode } from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
}

const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <>
      <label
        className={`text-xl max-sm:text-base text-muted ${className}`}
        {...props}
      >
        {children}
      </label>
    </>
  );
};

export default Label;
