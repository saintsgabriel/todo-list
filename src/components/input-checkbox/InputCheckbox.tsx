import { type VariantProps } from "class-variance-authority";

import CheckIcon from "../../assets/icons/check.svg?react";

import Icon from "../icon/Icon";
import {
  inputCheckboxIconVariants,
  inputCheckboxVariants,
  inputCheckboxWrapperVariants,
} from "./inputCheckboxVariants";
import Skeleton from "../skeleton/Skeleton";

interface InputCheckboxProps
  extends
    VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  loading?: boolean;
}

export default function InputCheckbox({
  size,
  disabled,
  className,
  loading,
  variant,
  ...props
}: InputCheckboxProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={inputCheckboxVariants({ variant: "none", size })}
      />
    );
  }

  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ variant, size, disabled })}
        {...props}
      />
      <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
    </label>
  );
}
