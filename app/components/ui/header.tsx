// components/Header.tsx
import { FC } from "react"

const Header: FC = () => {
  return (
    <header className={"w-full p-4 bg-white border-b h-16"}>
      <h1 className="text-2xl font-semibold">Application</h1>
    </header>
  )
}

export default Header
