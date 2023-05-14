import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  title: string;
}
export function Button({ title, className }: ButtonProps) {
  return (
    <button
      className={`p-4 ${className} disabled:bg-gray-400 disabled:text-gray-50`}
    >
      {title}
    </button>
  );
}
