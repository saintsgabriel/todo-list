import { type VariantProps } from "class-variance-authority";
import {
  buttonIconIconVariants,
  buttonIconVariants,
} from "./buttonIconVariants";
import Icon from "../icon/Icon";
import Skeleton from "../skeleton/Skeleton";
import SpinnerIcon from "../../assets/icons/spinner.svg?react";

interface ButtonIconProps
  extends
    Omit<React.ComponentProps<"button">, "disabled" | "size">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
  handling?: boolean;
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  loading,
  handling,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={buttonIconVariants({ variant: "none", size, className })}
      />
    );
  }

  return (
    <button
      className={buttonIconVariants({
        className,
        variant,
        size,
        disabled,
        handling,
      })}
      {...props}
    >
      <Icon
        className={buttonIconIconVariants({ size, variant })}
        svg={handling ? SpinnerIcon : icon}
        animate={handling}
      />
    </button>
  );
}
