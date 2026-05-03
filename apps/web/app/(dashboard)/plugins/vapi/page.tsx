import { auth } from "@clerk/nextjs/server";
import { PremiumFeatureOverlay } from "@/modules/billing/ui/components/premium-feature-overlay";
import { VapiView } from "@/modules/plugins/ui/views/vapi-view";

const Page = async () => {
  const { has } = await auth();
  const isPro = has({ plan: "pro" });

  if (!isPro) {
    return (
      <PremiumFeatureOverlay>
        <VapiView />
      </PremiumFeatureOverlay>
    );
  }

  return <VapiView />;
};

export default Page;