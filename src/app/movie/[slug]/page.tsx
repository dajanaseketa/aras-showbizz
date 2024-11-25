import {
  getMovieCreditsOptions,
  getMovieDetailsOptions,
  getMovieImagesOptions,
  getMovieKeywordsOptions,
  getMovieRecommendationsOptions,
} from "@/api/tmdbApi";
import { Footer, Header, getQueryClient } from "@/components";
import { MovieContent } from "@/pagesComponents";
import { FlexLayout } from "@/ui/components";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const id = (await params).slug;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(getMovieDetailsOptions(id));
  await queryClient.prefetchQuery(getMovieRecommendationsOptions(id));
  await queryClient.prefetchQuery(getMovieCreditsOptions(id));
  await queryClient.prefetchQuery(getMovieKeywordsOptions(id));
  await queryClient.prefetchQuery(getMovieImagesOptions(id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
      <FlexLayout className="flex-col min-h-screen">
        <MovieContent id={id} />
      </FlexLayout>
      <Footer />
    </HydrationBoundary>
  );
}
