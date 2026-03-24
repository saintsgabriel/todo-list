import type { VariantProps } from "class-variance-authority";
import { containerVariants } from "./variantsContainer";
import { createElement, type ComponentProps } from "react";

interface ContainerProps
  extends VariantProps<typeof containerVariants>, ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
  as = "div",
  children,
  className,
  ...props
}: ContainerProps) {
  return createElement(
    as,
    {
      className: containerVariants({ className, size: "md" }),
      ...props,
    },
    children,
  );
}
