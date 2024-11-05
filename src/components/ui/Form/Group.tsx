"use client";

import { ReactNode } from "react";

export interface GroupProps {
  children: ReactNode;
  className?: string;
}

const Group = ({ children, className }: GroupProps) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>{children}</div>
  );
};

export default Group;
