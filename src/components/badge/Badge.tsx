import type { ComponentProps } from "react";
import Text from "../text/Text";
import {
  badgeVariants,
  badgeTextVariants,
  badgeSkeletonVariants,
} from "./badgeVariants";
import { cx, type VariantProps } from "class-variance-authority";
import Skeleton from "../skeleton/Skeleton";

interface BadgeProps
  extends ComponentProps<"div">, VariantProps<typeof badgeVariants> {
  loading?: boolean;
}

export default function Badge({
  size,
  variant,
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={
          (cx(
            badgeSkeletonVariants({ size }),
            badgeVariants({ variant: "none" }),
          ),
          className)
        }
      />
    );
  }

  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text className={badgeTextVariants({ variant })} variant="body-md-bold">
        {children}
      </Text>
    </div>
  );
}
