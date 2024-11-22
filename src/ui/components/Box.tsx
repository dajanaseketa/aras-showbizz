import clsx from "clsx";
import React, { AllHTMLAttributes } from "react";

export type BoxProps = AllHTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  isDisabled?: boolean;
};

export const Box = React.forwardRef<any, BoxProps>(
  ({ className, isDisabled, onClick, as = "div", ...rest }, ref) => {
    const Component = as;

    return (
      <Component
        aria-disabled={isDisabled}
        className={clsx(
          className,
          isDisabled && "pointer-events-none",
          !isDisabled && onClick && "cursor-pointer"
        )}
        onClick={onClick}
        ref={ref}
        {...rest}
      />
    );
  }
);

Box.displayName = "Box";
