import { AppSidebar } from "./app-sidebar";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import AppHeader from "./app-header";

interface AppShellProps {
  children: React.ReactNode;
  title: string;
}

export default function AppShell({ children, title }: AppShellProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader title={title} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
