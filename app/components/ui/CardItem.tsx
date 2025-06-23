import React, { useContext } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThemeContext } from '@/app/context/ThemeContext'
import { cn } from '@/lib/utils'

export const CardItem = () => {
  const { dark } = useContext(ThemeContext)
  return (
    <Card className={cn({
      "dark-style": dark,
      "white-style": !dark
    })}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
