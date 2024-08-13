"use client";
import { useState } from "react";
import { Slider } from "./slider";
import { Input } from "../components/input";
import { cn } from "../components/cn";

export default function Home() {
  const [level, setLevel] = useState(0);
  const [amount, setAmount] = useState("");
  return (
    <main className="flex flex-col gap-4">
      <div>select risk level</div>
      <div className="grid grid-cols-4 gap-4">
        <button
          onClick={() => setLevel(0)}
          className={cn(
            "border-green-500 text-green-500 border p-2 rounded-lg w-full uppercase",
            level === 0 && "bg-green-500 text-white"
          )}
        >
          not risky at all
        </button>
        <button
          onClick={() => setLevel(1)}
          className={cn(
            "border-yellow-500 text-yellow-500  border p-2 rounded-lg w-full uppercase",
            level === 1 && "bg-yellow-500 text-white"
          )}
        >
          medium
        </button>
        <button
          onClick={() => setLevel(2)}
          className={cn(
            "border-orange-500 text-orange-500  border p-2 rounded-lg w-full uppercase",
            level === 2 && "bg-orange-500 text-white"
          )}
        >
          dangerous
        </button>
        <button
          onClick={() => setLevel(3)}
          className={cn(
            "border-red-500 text-red-500 border p-2 rounded-lg w-full uppercase",
            level === 3 && "bg-red-500 text-white"
          )}
        >
          {" "}
          hell
        </button>
      </div>
      <Slider />
      <Input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        className="text-black"
      />
      <button className="bg-yellow-300 p-4">Lets gamble</button>
    </main>
  );
}
