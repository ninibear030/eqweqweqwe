"use client";
import { Portfolio } from "./assets/portfolio";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <div className="flex justify-between items-center rounded-lg">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">Wallet</h2>
        </div>
        <div className="flex-1 text-right me-5">
          <p className="text-2xl font-semibold">$ 100000000.00</p>
        </div>
        <div className="flex-1 text-right">
          <button className="w-full p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
            Deposit
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        <div className=" rounded-lg shadow-md">
          <Portfolio/>
        </div>
      </div>
    </main>
  );
}
