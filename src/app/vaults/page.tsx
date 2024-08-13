"use client";
import { useState } from "react";
import { Slider } from "./slider";
import { Input } from "../components/input";

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
      {level === 0 && (
        <div className="grid grid-cols-3 gap-4">
          <Request1 name="dealname" progress={50} title="deal title" />
          <Request1 name="Gummi" progress={10} title="Lending protocol" />
          <Request1 name="Beraland" progress={70} title="ecosystem" />
          <Request1 name="Shogun" progress={38} title="crosschain" />
        </div>
      )}
      {level === 1 && (
        <div className="grid grid-cols-3 gap-4">
          <Request1 name="dealname" progress={50} title="deal title" />
          <Request1 name="Gummi" progress={10} title="Lending protocol" />
          <Request1 name="Shogun" progress={38} title="crosschain" />
        </div>
      )}
      {level === 2 && (
        <div className="grid grid-cols-3 gap-4">
          <Request1 name="dealname" progress={50} title="deal title" />
          <Request1 name="Shogun" progress={38} title="crosschain" />
        </div>
      )}
      {level === 3 && (
        <div className="grid grid-cols-3 gap-4">
          <Request1 name="dealname" progress={50} title="deal title" />
        </div>
      )}
    </main>
  );
}
