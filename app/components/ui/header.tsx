"use client"

import { ThemeContext } from "@/app/context/ThemeContext"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { FC, useContext } from "react"

const Header: FC = () => {

  const { dark, setDark } = useContext(ThemeContext)

  return (
    <header className={cn("w-full p-4 bg-white border-b h-16 flex justify-between",{
      "dark-style": dark,
      "white-style": !dark
    })}>
      <h1 className="text-2xl font-semibold">Application</h1>

      <div className="flex items-center gap-2 justify-center">
        <span className={cn({
          "font-bold": !dark
        })}>
          claro
        </span>
        <Switch
          checked={dark}
          onCheckedChange={setDark}
        />
        <span
        className={cn({
          "font-bold": dark
        })}
        >
          oscuro
        </span>
      </div>
    </header>
  )
}

export default Header
