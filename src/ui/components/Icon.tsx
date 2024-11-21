import clsx from "clsx";
import * as icons from "../assets/icons";
import { Box, BoxProps } from "./Box";
import React from "react";

const sizeVariants = {
  s: "w-[15px] h-[15px]",
  m: "w-[20px] h-[20px]",
  l: "w-[25px] h-[25px]",
};

export type IconSizeVariant = keyof typeof sizeVariants;
export type IconType = keyof typeof icons;

type IconProps = Pick<
  BoxProps,
  "onClick" | "onBlur" | "onKeyDown" | "className"
> & {
  ariaLabel?: string;
  icon: IconType;
  size?: IconSizeVariant;
  color?: string;
};

export const Icon = React.forwardRef<any, IconProps>(
  (
    { ariaLabel, color, icon, size = "m", onClick, className, ...rest },
    ref
  ) => {
    const IconComponent = icons[icon];

    return (
      <Box
        ref={ref}
        aria-label={ariaLabel}
        onClick={onClick}
        className={clsx(className, sizeVariants[size], color, "flex-none")}
        {...rest}
      >
        <IconComponent height="100%" width="100%" viewBox="0 0 24 24" />
      </Box>
    );
  }
);

Icon.displayName = "Icon";
