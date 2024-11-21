import React from "react";
import { Box } from "./Box";
import { Text } from "./Text";
import { FlexLayout } from "./FlexLayout";
import clsx from "clsx";

interface TabsProps {
  tabs: TabProps[];
}

export const Tabs = React.forwardRef<any, TabsProps>(({ tabs }, ref) => {
  return (
    <FlexLayout ref={ref}>
      {tabs.map((tab, index) => (
        <Tab
          key={`${tab.label}-${index}`}
          label={tab.label}
          isSelected={tab.isSelected}
        />
      ))}
    </FlexLayout>
  );
});

Box.displayName = "Tabs";

interface TabProps {
  isSelected?: boolean;
  label: string;
}

const Tab = React.forwardRef<any, TabProps>(
  ({ isSelected = false, label }, ref) => {
    return (
      <Box
        className={clsx(
          "after:content-[''] after:block after:w-full after:hover:bg-content-content-hover after:focus:bg-content-content-hover",
          "hover:text-content-content-hover hover:cursor-pointer",
          isSelected
            ? "text-content-content-primary after:mt-2xs after:h-0.5 after:bg-content-content-primary"
            : "text-content-content-secondary after:mt-[11px] after:h-[1px] after:bg-border-border-low-contrast"
        )}
      >
        <Text
          ref={ref}
          className="px-2xs"
          variant={isSelected ? "navigation-selected" : "navigation-unselected"}
        >
          {label}
        </Text>
      </Box>
    );
  }
);

Box.displayName = "Tab";
