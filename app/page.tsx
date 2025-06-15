import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/ui/AppSidebar";
import Header from "./components/ui/Header";
import { CardItem } from "./components/ui/CardItem";



export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="grid p-4 grid-cols-12 gap-4">
          {
            Array.from({length: 10}).map((_,i)=>(
              <div key={i} className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3">
                <CardItem  />
              </div>
            ))
          }
        </main>
      </div>
    </SidebarProvider>
  );
}
