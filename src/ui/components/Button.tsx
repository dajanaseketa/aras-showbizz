import clsx from "clsx";
import React from "react";

import { Box, BoxProps } from "./Box";
import { Icon, IconSizeVariant, IconType } from "./Icon";
import { FlexLayout } from "./FlexLayout";
import { Text, TextVariant } from "./Text";

const sizeVariants: Record<
  string,
  { sizeStyles: string; textVariant: TextVariant; iconSize: IconSizeVariant }
> = {
  "primary-m": {
    sizeStyles: "rounded px-2xs py-3",
    textVariant: "button-m",
    iconSize: "s",
  },
  "primary-l": {
    sizeStyles: "rounded p-2xs",
    textVariant: "button-l",
    iconSize: "m",
  },
  "secondary-m": {
    sizeStyles: "rounded p-2xs",
    textVariant: "button-m",
    iconSize: "s",
  },
  "secondary-l": {
    sizeStyles: "rounded p-2xs",
    textVariant: "button-l",
    iconSize: "m",
  },
};

type ButtonSizeVariant = keyof typeof sizeVariants;

const variantStyles = {
  primary: {
    default:
      "bg-surface-surface-action-default text-content-content-on-surface-action-default",
    hover: clsx(
      "hover:bg-surface-surface-action-hover hover:text-content-content-on-surface-action-hover",
      "focus:underline focus:bg-surface-surface-action-hover focus:text-content-content-on-surface-action-hover focus:underline focus:outline-none"
    ),
    disabled:
      "aria-disabled:bg-none aria-disabled:text-content-content-disabled",
  },
  secondary: {
    default: "text-dark-content-content-primary",
    hover: clsx(
      "hover:text-dark-content-content-hover hover:underline",
      "focus:text-dark-content-content-hover focus:underline focus:outline-none"
    ),
    disabled:
      "aria-disabled:text-dark-content-content-disabled aria-disabled:underline",
  },
};

const variantStylesMap = Object.fromEntries(
  Object.entries(variantStyles).map(([key, value]) => [
    key,
    Object.values(value).join(" "),
  ])
);

type ButtonProps = Pick<
  BoxProps,
  "onClick" | "type" | "isDisabled" | "href" | "target" | "rel"
> & {
  as?: "button" | "a";
  iconLeft?: IconType;
  iconRight?: IconType;
  size?: ButtonSizeVariant;
  variant?: "primary" | "secondary";
  label: string;
  isFullWidth?: boolean;
};

export const Button = React.forwardRef<unknown, ButtonProps>(
  (
    {
      as = "button",
      isDisabled = false,
      iconLeft,
      iconRight,
      size = "m",
      variant = "primary",
      label,
      isFullWidth = false,
      ...rest
    },
    ref
  ) => {
    const { sizeStyles, iconSize, textVariant } =
      sizeVariants[`${variant}-${size}`];
    const styles = variantStylesMap[variant];

    return (
      <Box
        as={as}
        className={clsx(
          isFullWidth ? "w-full" : "w-fit",
          !isDisabled && "cursor-pointer",
          sizeStyles,
          styles
        )}
        isDisabled={isDisabled}
        ref={ref}
        tabIndex={isDisabled ? -1 : 0}
        {...rest}
      >
        <FlexLayout className={clsx("items-center justify-center gap-2xs")}>
          {!!iconLeft && <Icon icon={iconLeft} size={iconSize} />}
          <Text variant={textVariant}>{label}</Text>
          {!!iconRight && <Icon icon={iconRight} size={iconSize} />}
        </FlexLayout>
      </Box>
    );
  }
);

Button.displayName = "Button";
