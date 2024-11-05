"use client";

import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  isInvalid?: boolean;
}

const Textarea = ({ className, isInvalid, ...props }: TextareaProps) => {
  return (
    <>
      <textarea
        className={`rounded border p-4 text-2xl max-sm:text-xl placeholder:text-secondary placeholder:text-opacity-45 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_5px] shadow-transparent transition-all focus:border-primary focus:shadow-primary ${className} ${
          isInvalid ? "border-red-500" : ""
        }`}
        aria-invalid={isInvalid}
        {...props}
      ></textarea>
    </>
  );
};

export default Textarea;
