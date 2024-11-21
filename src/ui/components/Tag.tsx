import React from "react";
import { Box } from "./Box";
import { Text } from "./Text";
import clsx from "clsx";

const variantStylesMap = {
  s: "py-1 px-2",
  m: "py-3xs px-2xs",
};

type TagVariant = keyof typeof variantStylesMap;

interface TagProps {
  label: string;
  variant?: TagVariant;
}

export const Tag = React.forwardRef<any, TagProps>(
  ({ label, variant = "m" }, ref) => {
    const styles = variantStylesMap[variant];

    return (
      <Text
        ref={ref}
        variant={`tag-${variant}`}
        className={clsx(
          "w-fit rounded-sm border text-content-content-primary border-border-border-low-contrast",
          styles
        )}
      >
        {label}
      </Text>
    );
  }
);

Box.displayName = "Tag";
