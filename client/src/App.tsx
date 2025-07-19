// import FooterMain from "./home/layout/footer/footer"
import HeaderMain from "./home/layout/header/header";
import SidebarMain from "./home/layout/sidebar/sidebar";

const App = () => {
  return (
    <SidebarMain>
      <div className="flex flex-col min-h-screen">
        <HeaderMain />
        <main className="flex-1 p-3">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Welcome to Prodo</h1>
            <p className="text-muted-foreground">
              Your product management workspace
            </p>
          </div>
        </main>
        {/* <FooterMain /> */}
      </div>
    </SidebarMain>
  );
};

export default App;
