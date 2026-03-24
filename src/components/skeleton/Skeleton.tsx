import { type VariantProps } from "class-variance-authority";
import { skeletonVariants } from "./skeletonVariants";
import type { ComponentProps } from "react";

interface SkeletonProps
  extends VariantProps<typeof skeletonVariants>, ComponentProps<"div"> {}

export default function Skeleton({
  rounded,
  className,
  ...props
}: SkeletonProps) {
  return (
    <div className={skeletonVariants({ rounded, className })} {...props}></div>
  );
}
