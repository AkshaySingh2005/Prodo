import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const SIDEBAR_WIDTH = "14rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"

export default function SidebarMain({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={{
        ["--sidebar-width"]: SIDEBAR_WIDTH,
        ["--sidebar-width-mobile"]: SIDEBAR_WIDTH_MOBILE,
      } as React.CSSProperties}
    >
      <AppSidebar />
      <main>
        <SidebarTrigger/>
        {children}
      </main>
    </SidebarProvider>
  )
}