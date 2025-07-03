"use client"

import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

const numbers = Array.from({ length: 1_000 }, (_, i) => i);

export default function Home() {

  const [count, setCount] = useState(0);

  const elements = useMemo(()=>{
    return numbers.filter((n) => {
      return n % 2 === 0;
    }).map(item=>(
      <p key={item}>Hola {item}</p>
    ));
  },[])


  return (
    <main className="p-4">
      {elements}
      <Button 
        className="mt-4" 
        onClick={() => setCount(count + 1)}>
        Incrementar contador: {count}
      </Button>
    </main>
  );
}
