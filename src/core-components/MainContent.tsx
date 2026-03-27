import { cx } from "class-variance-authority";
import type { ComponentProps } from "react";

export default function MainContent({
  children,
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main className={cx("mt-4 md:mt-8", className)} {...props}>
      {children}
    </main>
  );
}
