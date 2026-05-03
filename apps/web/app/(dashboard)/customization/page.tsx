import { auth } from "@clerk/nextjs/server";
import { PremiumFeatureOverlay } from "@/modules/billing/ui/components/premium-feature-overlay";
import { CustomizationView } from "@/modules/customization/ui/views/customization-view";

const Page = async () => {
  const { has } = await auth();
  const isPro = has({ plan: "pro" });

  if (!isPro) {
    return (
      <PremiumFeatureOverlay>
        <CustomizationView />
      </PremiumFeatureOverlay>
    );
  }

  return <CustomizationView />;
};

export default Page;