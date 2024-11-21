"use client";

import React, { InputHTMLAttributes } from "react";
import { Box } from "./Box";
import clsx from "clsx";
import { Icon, IconType } from "./Icon";
import { FlexLayout } from "./FlexLayout";

type InputFieldProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "autoFocus" | "name" | "placeholder" | "onBlur"
> & {
  iconLeft?: IconType;
  value: string;
  onChange?: (value: string) => void;
};

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ onChange, iconLeft, autoFocus = true, ...rest }, ref) => {
    return (
      <FlexLayout
        className={clsx(
          "group items-center w-full h-[45px] px-2xs py-2 gap-2xs bg-surface-surface-gray border border-border-border-low-contrast",
          "focus-within:border-border-border-action"
        )}
      >
        {iconLeft && (
          <Icon
            size="s"
            icon={iconLeft}
            color="text-content-content-secondary group-focus-within:text-content-content-primary"
          />
        )}
        <Box
          as="input"
          className={clsx(
            "w-full h-full bg-transparent outline-none",
            "font-primary text-label-m-regular text-content-content-primary placeholder:text-label-m-regular placeholder:text-content-content-secondary caret-border-border-action"
          )}
          ref={ref}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange?.(e.target.value)
          }
          autoFocus={autoFocus}
          {...rest}
        />
      </FlexLayout>
    );
  }
);

Box.displayName = "InputField";
