import { createContext, Dispatch, SetStateAction } from "react";

type ThemeContextData = {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeContextData>({
  dark: false,
  setDark: ()=>{}
})