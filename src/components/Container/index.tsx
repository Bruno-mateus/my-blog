import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <main
      className={`${className} max-w-6xl px-8 pt-20 pb-8 bg-gray-100 m-auto dark:bg-gray-900`}
    >
      {children}
    </main>
  );
}
