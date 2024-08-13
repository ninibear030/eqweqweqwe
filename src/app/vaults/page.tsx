"use client";
import { useState, useEffect } from "react";
import { Slider } from "./slider";
import { Input } from "../components/input";
import { cn } from "../components/cn";

export default function Vault() {
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState("HONEY");
  const [apyRange, setApyRange] = useState("10%");
  const [mojiIndex, setMojiIndex] = useState(0);

  useEffect(() => {
    const baseAPY = selectedToken === "HONEY" ? 5 : 4;
    const riskMultiplier = 1 + mojiIndex * 100;
    const maxAPY = ((baseAPY + 5) * riskMultiplier).toFixed(1);
    setApyRange(`${maxAPY}%`);
  }, [selectedToken, mojiIndex]);

  return (
    <main className="flex flex-col gap-4 w-[800px] items-center">
      <div className="text-2xl mb-10 w-full text-left">Slopes</div>

      <div className="flex items-center gap-2">
        Earn <span className="text-indigo-200 text-2xl">{apyRange} APY</span> on
        your
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setSelectedToken("BERA")}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-l-lg focus:z-10 focus:ring-2 focus:ring-white focus:text-indigo-200",
              selectedToken === "BERA"
                ? "bg-gray-600 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
            )}
          >
            BERA
          </button>
          <button
            type="button"
            onClick={() => setSelectedToken("HONEY")}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-r-lg focus:z-10 focus:ring-2  focus:ring-white focus:text-indigo-200",
              selectedToken === "HONEY"
                ? "bg-gray-600 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
            )}
          >
            HONEY
          </button>
        </div>
      </div>
      <Slider mojiIndex={mojiIndex} setMojiIndex={setMojiIndex} />
      <div className="bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange-900 px-4 py-3 shadow-md">
        <div className="flex">
          <div>
            <p className="font-bold">💀 Yield tailored to your risk appetite</p>
            <p className="text-sm">
              Based on your risk selection, the Syllabus AI dynamically
              allocates your capital into the most profitable, risk-adjusted
              opportunities, fully automated with built-in compounding
            </p>
          </div>
        </div>
      </div>

<<<<<<< Updated upstream
      <div className="text-2xl">Deposit {selectedToken}</div>
      <Input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        className="text-black"
      />
      <button className="bg-yellow-300 p-4">Let&apos;s gamble</button>
=======
      <div className="w-full mt-10">
        <div className="text-lg mb-2"> Deposit {`${selectedToken}`}</div>
        <div className="flex gap-4">
          <Input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            className="text-black"
          />

          <button className="w-[200px] p-2 bg-indigo-200 text-black rounded-lg font-bold">
            Let&apos;s gamble 🚀
          </button>
        </div>
      </div>
>>>>>>> Stashed changes
    </main>
  );
}
