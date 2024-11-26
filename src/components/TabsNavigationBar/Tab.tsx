import { Box, Text } from "@/ui/components";
import clsx from "clsx";
import React from "react";

export interface TabProps {
  isSelected?: boolean;
  label: string;
  onClick: () => void;
}

export const Tab = React.forwardRef<any, TabProps>(
  ({ isSelected = false, label, onClick }, ref) => {
    return (
      <Box
        as="button"
        ref={ref}
        onClick={onClick}
        className={clsx(
          "cursor-pointer hover:text-content-content-hover",
          "after:content-[''] after:block after:w-full after:hover:bg-content-content-hover after:focus:bg-content-content-hover",
          isSelected
            ? "text-content-content-primary after:mt-2xs after:h-0.5 after:bg-content-content-primary"
            : "text-content-content-secondary after:mt-[11px] after:h-[1px] after:bg-border-border-low-contrast"
        )}
      >
        <Text
          className="px-2xs"
          variant={isSelected ? "navigation-selected" : "navigation-unselected"}
        >
          {label}
        </Text>
      </Box>
    );
  }
);

Tab.displayName = "Tab";
