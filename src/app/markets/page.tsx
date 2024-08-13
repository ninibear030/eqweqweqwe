"use client";
import { Request } from "./request";
import { NewRequest } from "./newRequest";
export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex justify-between border border-blue-900 rounded-lg">
        <div className="flex-1 text-center p-4">
          {" "}
          <div className="text-lg">Total Requests</div>
          <div className="text-3xl">10</div>
        </div>
        <div className=" border-x border-blue-900 flex-1  text-center  p-4">
          {" "}
          <div className="text-lg">Total Funding</div>
          <div className="text-3xl">$ 112,312,213</div>
        </div>
        <div className=" p-4 flex-1  text-center">
          <NewRequest name="Kodiac" progress={50} title="AMM liquidity" />
        </div>
      </div>
      <hr className="border-blue-900" />
      <div className="grid grid-cols-2 gap-4">
        <Request name="Kodiac" progress={50} title="AMM liquidity" />
        <Request name="Gummi" progress={10} title="Lending protocol" />
        <Request name="Beraland" progress={70} title="ecosystem" />
        <Request name="Shogun" progress={38} title="crosschain" />
      </div>
    </main>
  );
}
