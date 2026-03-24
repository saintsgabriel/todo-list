import type React from "react";
import type { ComponentProps } from "react";
import { iconVariants } from "./iconVariants";
import { type VariantProps } from "class-variance-authority";

interface IconProps
  extends ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}
export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent className={iconVariants({ animate, className })} {...props} />
  );
}
