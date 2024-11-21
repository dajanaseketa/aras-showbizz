import clsx from "clsx";
import React from "react";

import { Box, BoxProps } from "./Box";

export const GridLayout = React.forwardRef<any, BoxProps>(
  ({ className, ...rest }, ref) => {
    return (
      <Box as="div" className={clsx("grid", className)} ref={ref} {...rest} />
    );
  }
);

GridLayout.displayName = "GridLayout";
