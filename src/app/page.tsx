import {
  popularMoviesOptions,
  popularPeopleOptions,
  popularTvOptions,
  trendingAllDayOptions,
  trendingAllWeekOptions,
  upcomingMoviesOptions,
} from "@/api/tmdbApi";
import { Footer, Header, getQueryClient } from "@/components";
import {
  Hero,
  JoinTodayBanner,
  TrendingContainer,
  PopularContainer,
  UpcomingContainer,
} from "@/pagesComponents";
import { FlexLayout } from "@/ui/components";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function LandingPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(trendingAllDayOptions);
  await queryClient.prefetchQuery(trendingAllWeekOptions);
  await queryClient.prefetchQuery(upcomingMoviesOptions);
  await queryClient.prefetchQuery(popularMoviesOptions);
  await queryClient.prefetchQuery(popularTvOptions);
  await queryClient.prefetchQuery(popularPeopleOptions);

  return (
    <div className="min-h-screen">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Header />
        <Hero />
        <FlexLayout className="flex-col">
          <TrendingContainer />
          <UpcomingContainer />
          <PopularContainer />
        </FlexLayout>
        <FlexLayout className="flex-col sticky top-[100vh] bg-dark-background-background-black">
          <JoinTodayBanner />
          <Footer />
        </FlexLayout>
      </HydrationBoundary>
    </div>
  );
}
