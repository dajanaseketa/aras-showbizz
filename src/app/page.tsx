import { Footer, Header } from "@/components";
import { Hero, JoinTodayBanner } from "@/pages-components";
import { FlexLayout } from "@/ui/components";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FlexLayout className="flex-col sticky top-[100vh] bg-dark-background-background-black">
        <JoinTodayBanner />
        <Footer />
      </FlexLayout>
    </div>
  );
}
