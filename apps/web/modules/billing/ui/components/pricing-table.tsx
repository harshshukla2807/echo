"use client";

import { PricingTable as ClerkPricingTable } from "@clerk/nextjs";

export const PricingTable = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <ClerkPricingTable
  for="organization"
  appearance={{
    elements: {
      pricingTableCard: { boxShadow: "none", border: "1px solid", borderRadius: "0.5rem" },
      pricingTableCardHeader: { backgroundColor: "hsl(var(--background))" },
      pricingTableCardBody: { backgroundColor: "hsl(var(--background))" },
      pricingTableCardFooter: { backgroundColor: "hsl(var(--background))" },
    }
  }}
/>
    </div>
  )
};