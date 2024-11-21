import clsx from "clsx";
import React from "react";

import { Box, BoxProps } from "./Box";

const textVariants = {
  "button-l": "font-bold text-button-l leading-button-l tracking-button-l",
  "button-m": "font-bold text-button-m leading-button-m tracking-button-m",
  "caption-m": "font-bold text-caption-m leading-caption-m tracking-caption-m",
  "caption-s": "font-bold text-caption-s leading-caption-s tracking-caption-s",
  "code-paragraph":
    "font-code font-regular text-code-paragraph leading-code-paragraph tracking-code-paragraph",
  "code-tag":
    "font-code font-regular text-code-tag leading-code-tag tracking-code-tag",
  h1: "font-bold text-h1 leading-h1 tracking-h1",
  h2: "font-bold text-h2 leading-h2 tracking-h2",
  h3: "font-bold text-h3 leading-h3 tracking-h3",
  h4: "font-bold text-h4 leading-h4 tracking-h4",
  h5: "font-bold text-h5 leading-h5 tracking-h5",
  "label-m-bold":
    "font-bold text-label-m-bold leading-label-m-bold tracking-label-m-bold",
  "label-m-regular":
    "font-normal text-label-m-regular leading-label-m-regular tracking-label-m-regular",
  "label-s-bold":
    "font-bold text-label-s-bold leading-label-s-bold tracking-label-s-bold",
  "label-s-regular":
    "font-normal text-label-s-regular leading-label-s-regular tracking-label-s-regular",
  "navigation-selected":
    "font-bold text-navigation leading-navigation tracking-navigation",
  "navigation-unselected":
    "font-normal text-navigation leading-navigation tracking-navigation",
  "overline-m":
    "font-normal text-overline-m leading-overline-m tracking-overline-m",
  "paragraph-l":
    "font-normal text-paragraph-l leading-paragraph-l tracking-paragraph-l",
  "paragraph-m":
    "font-normal text-paragraph-m leading-paragraph-m tracking-paragraph-m",
  "tag-m": "font-normal text-tag-m leading-tag-m tracking-tag-m",
  "tag-s": "font-bold text-tag-s leading-tag-s tracking-tag-s",
  title: "font-bold text-title leading-title tracking-title",
};

export type TextVariant = keyof typeof textVariants;

type TextProps = Pick<BoxProps, "className" | "children" | "as"> & {
  variant?: TextVariant;
  color?: string;
  font?: "font-primary" | "font-code";
};

export const Text = React.forwardRef<any, TextProps>(
  (
    {
      as = "span",
      className,
      font = "font-primary",
      variant = "label-m-regular",
      color,
      ...rest
    },
    ref
  ) => {
    return (
      <Box
        as={as}
        className={clsx(className, font, textVariants[variant], color)}
        ref={ref}
        {...rest}
      />
    );
  }
);

Text.displayName = "Text";
