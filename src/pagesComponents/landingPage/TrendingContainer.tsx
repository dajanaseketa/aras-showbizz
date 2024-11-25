"use client";

import { trendingAllDayOptions, trendingAllWeekOptions } from "@/api/tmdbApi";
import { LargeCardsContainer } from "@/components";
import { Box, FlexLayout } from "@/ui/components";
import { mapItemsToCards } from "@/utils/apiDataTransformations";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export const TrendingContainer: React.FC = () => {
  const { data: dayTrendingAll } = useQuery(trendingAllDayOptions);
  const { data: weekTrendingAll } = useQuery(trendingAllWeekOptions);

  const [time, setTime] = useState<"day" | "week">("day");

  const tabs = [
    {
      label: "Today",
      isSelected: time === "day",
      onClick: () => setTime("day"),
    },
    {
      label: "This Week",
      isSelected: time === "week",
      onClick: () => setTime("week"),
    },
  ];

  const cards = useMemo(() => {
    const selectedItems = time === "day" ? dayTrendingAll : weekTrendingAll;

    if (!selectedItems) {
      return [];
    }

    return mapItemsToCards(selectedItems);
  }, [dayTrendingAll, weekTrendingAll, time]);

  return (
    <FlexLayout className="py-2xl px-center-grid-l-margin-width justify-center">
      <Box className="max-w-[1200px]">
        <LargeCardsContainer title="Trending" tabs={tabs} cards={cards} />
      </Box>
    </FlexLayout>
  );
};
