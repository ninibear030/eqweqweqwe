"use client";
import { useState } from "react";
import { Slider } from "./slider";
import { Input } from "../components/input";

export default function Home() {
  const [level, setLevel] = useState(0);
  const [amount, setAmount] = useState("");
  return (
    <main className="flex flex-col gap-4">
      <div>
        <div className="text-3xl mb-4">Select token:</div>
        <div className="w-full flex gap-8">
          <button className="w-80 p-4 bg-yellow-400 rounded-lg">Honey</button>
          <button className="w-80 p-4  bg-orange-400 rounded-lg">WBERA</button>
        </div>
      </div>
      <Slider />
      <Input type="number" onChange={(e)=>setAmount(e.target.value)} value={amount} className="text-black"/>
      <button className="bg-yellow-300 p-4">Lets gamble</button>
    </main>
  );
}
