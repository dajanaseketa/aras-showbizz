import React from "react";
import { TabProps, Tab } from "./Tab";
import { FlexLayout } from "@/ui/components";

interface TabsNavigationBarProps {
  tabs: TabProps[];
}

export const TabsNavigationBar = React.forwardRef<any, TabsNavigationBarProps>(
  ({ tabs }, ref) => {
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
  }
);

TabsNavigationBar.displayName = "TabsNavigationBar";
