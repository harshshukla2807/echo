import { AuthGuard } from "@/modules/auth/ui/components/auth-guard"
import { OrganizationGuard } from "@/modules/auth/ui/components/organisation-guard"
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar"
import { SidebarProvider } from "@workspace/ui/components/sidebar"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import { Provider } from "jotai"
import { cookies } from "next/headers"

export const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const cookieStore = await cookies()
  //   // Using SIDEBAR_COOKIE_NAME from sidebar component does not work due to monorepo and SSR
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <AuthGuard>
      <OrganizationGuard>
        <Provider>
          <TooltipProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
              <DashboardSidebar />
              <main className="flex flex-1 flex-col">{children}</main>
            </SidebarProvider>
          </TooltipProvider>
        </Provider>
      </OrganizationGuard>
    </AuthGuard>
  )
}
