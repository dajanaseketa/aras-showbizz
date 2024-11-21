import clsx from "clsx";
import React from "react";

import { Box, BoxProps } from "./Box";

export const FlexLayout = React.forwardRef<any, BoxProps>(
  ({ className, ...rest }, ref) => {
    return (
      <Box as="div" className={clsx("flex", className)} ref={ref} {...rest} />
    );
  }
);

FlexLayout.displayName = "FlexLayout";
