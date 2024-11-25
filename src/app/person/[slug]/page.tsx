import {
  getPersonCreditsOptions,
  getPersonDetailsOptions,
} from "@/api/tmdbApi";
import { Footer, Header, getQueryClient } from "@/components";
import { Biography, PersonalInfo, KnownFor } from "@/pagesComponents";
import { FlexLayout } from "@/ui/components";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function PersonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const id = (await params).slug;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(getPersonDetailsOptions(id));
  await queryClient.prefetchQuery(getPersonCreditsOptions(id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
      <FlexLayout className="min-h-screen max-w-center-grid-l-container-max-width min-w-center-grid-l-container-min-width py-xl mx-auto gap-center-grid-l-gutter-width">
        <PersonalInfo id={id} />
        <FlexLayout className="flex-col max-w-[920px]">
          <Biography id={id} />
          <KnownFor id={id} />
        </FlexLayout>
      </FlexLayout>
      <Footer />
    </HydrationBoundary>
  );
}
