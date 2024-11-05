"use client";

import React, { ReactNode } from "react";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Row = ({ children, className, ...props }: RowProps) => {
  return (
    <>
      <div
        className={`flex max-sm:flex-col gap-10 max-sm:gap-5 ${className}`}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Row;
