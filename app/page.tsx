"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/ui/AppSidebar";
import Header from "./components/ui/Header";
import { CardItem } from "./components/ui/CardItem";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { cn } from "@/lib/utils";


export default function Home() {

  const [dark,setDark] = useState(false)

  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark
      }}
    >
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col w-full">
          <Header />
          <main className={cn("grid p-4 grid-cols-12 gap-4",{
      "dark-style": dark,
      "white-style": !dark
    })}>
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
    </ThemeContext.Provider>
  );
}
