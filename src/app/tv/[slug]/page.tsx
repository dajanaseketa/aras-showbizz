import {
  getTvShowCreditsOptions,
  getTvShowDetailsOptions,
  getTvShowImagesOptions,
  getTvShowKeywordsOptions,
  getTvShowRecommendationsOptions,
} from "@/api/tmdbApi";
import { Footer, Header, getQueryClient } from "@/components";
import { TvShowContent } from "@/pagesComponents";
import { FlexLayout } from "@/ui/components";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function TwShowPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const id = (await params).slug;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(getTvShowDetailsOptions(id));
  await queryClient.prefetchQuery(getTvShowRecommendationsOptions(id));
  await queryClient.prefetchQuery(getTvShowCreditsOptions(id));
  await queryClient.prefetchQuery(getTvShowKeywordsOptions(id));
  await queryClient.prefetchQuery(getTvShowImagesOptions(id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
      <FlexLayout className="flex-col min-h-screen">
        <TvShowContent id={id} />
      </FlexLayout>
      <Footer />
    </HydrationBoundary>
  );
}
