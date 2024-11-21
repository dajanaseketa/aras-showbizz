import clsx from "clsx";
import React, { AllHTMLAttributes } from "react";

export type BoxProps = AllHTMLAttributes<HTMLElement> & {
  isDisabled?: boolean;
};

export const Box = React.forwardRef<any, BoxProps>((props, ref) => {
  const { className, isDisabled, onClick, as, ...rest } = props;

  return (
    <div
      aria-disabled={isDisabled}
      className={clsx(
        className,
        isDisabled && "pointer-events-none",
        !isDisabled && onClick && "cursor-pointer"
      )}
      ref={ref}
      {...rest}
    />
  );
});

Box.displayName = "Box";
