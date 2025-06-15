import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/ui/app-sidebar";
import Header from "./components/ui/header";



export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="p-4">
          <h1>
            Hola mundo
          </h1>
        </main>
      </div>
    </SidebarProvider>
  );
}
