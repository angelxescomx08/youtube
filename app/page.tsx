"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function Formulario() {
  const [value, setValue] = useState("");

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Escribe aquí"
        className="mb-2"
      />
      <p>Valor: {value}</p>
    </div>
  );
}


export default function Home() {

  const [key, setKey] = useState(1);

  return (
    <main className="p-4">
      <Button className="mb-2" onClick={() => {
        setKey(key + 1);
      }}>
        Reset
      </Button>
      <Formulario key={key} />
    </main>
  );
}
