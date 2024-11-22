import { getPersonDetailsOptions } from "@/api/tmdbApi";
import { Footer, Header, getQueryClient } from "@/components";
import { PersonalInfo } from "@/pagesComponents";
import { Biography } from "@/pagesComponents/personPage/Biography";
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

  return (
    <div className="min-h-screen">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Header />
        <FlexLayout className="max-w-center-grid-l-container-max-width min-w-center-grid-l-container-min-width h-screen py-xl mx-auto gap-center-grid-l-gutter-width">
          <PersonalInfo id={id} />
          <Biography id={id} />
        </FlexLayout>
        <Footer />
      </HydrationBoundary>
    </div>
  );
}
