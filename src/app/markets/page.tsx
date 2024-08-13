"use client";
import { Request } from "./request";
import { NewRequest } from "./newRequest";
export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex justify-between gap-4 items-center">
        <div className="text-2xl">Fulcrum</div>
        <div className="w-[800px] flex gap-4">
          <div className="flex-1 text-center p-4 bg-[#202426] rounded-lg">
            {" "}
            <div className="text-lg text-indigo-200">Total Requests</div>
            <div className="text-2xl text-white">10</div>
          </div>
          <div className="flex-1  text-center p-4 bg-[#202426] rounded-lg ">
            {" "}
            <div className="text-lg text-indigo-200">Total Funding</div>
            <div className="text-2xl text-white">$ 112,312,213</div>
          </div>
        </div>
      </div>

      <hr className="border-indigo-200 border-1 opacity-50" />
      <NewRequest name="Kodiac" progress={50} title="AMM liquidity" />
      <div className="grid grid-cols-2 gap-4">
        <Request name="Kodiac" progress={50} title="AMM liquidity" />
        <Request name="Gummi" progress={10} title="Lending protocol" />
        <Request name="Beraland" progress={70} title="ecosystem" />
        <Request name="Shogun" progress={38} title="crosschain" />
      </div>
    </main>
  );
}
