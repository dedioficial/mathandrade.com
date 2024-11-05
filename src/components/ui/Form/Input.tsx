"use client";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
}

const Input = ({ isInvalid, className, ...props }: InputProps) => {
  return (
    <>
      <input
        className={`rounded border p-4 text-2xl max-sm:text-xl placeholder:text-secondary placeholder:text-opacity-45 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_5px] shadow-transparent transition-all focus:border-primary focus:shadow-primary ${className} ${
          isInvalid
            ? "!border-red-500 focus:!border-red-500 focus:!shadow-red-300"
            : ""
        }`}
        aria-invalid={isInvalid}
        {...props}
      />
    </>
  );
};

export default Input;
