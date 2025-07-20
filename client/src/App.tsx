import HeaderMain from "@/home/layout/header/header";
import SidebarMain from "@/home/layout/sidebar/sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const App = ({ children }: AppLayoutProps) => {
  return (
    <SidebarMain>
      <div className="flex flex-col min-h-screen">
        <HeaderMain />
        <main>{children}</main>
      </div>
    </SidebarMain>
  );
};

export default App;
