"use client";
import { Request } from "./request";
import { NewRequest } from "./newRequest";
export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex justify-between gap-4 items-center mb-10">
        <div>
          <div className="text-2xl font-semibold">Fulcrum</div>
          <div className="text-sm">
            {" "}
            Facilitating liquidity for the Bera ecosystem
          </div>
        </div>

        <div className="w-[750px] flex gap-4">
          <div className="flex-1 text-center p-4 bg-[#202426] rounded-lg">
            {" "}
            <div className="text-sm text-indigo-200">Total Requests</div>
            <div className="text-2xl text-white">10</div>
          </div>
          <div className="flex-1  text-center p-4 bg-[#202426] rounded-lg ">
            {" "}
            <div className="text-sm text-indigo-200">Total Funding</div>
            <div className="text-2xl text-white">$ 112,312,213</div>
          </div>
          <div className="flex-1  text-center p-4 bg-[#202426] rounded-lg ">
            {" "}
            <div className="text-sm text-indigo-200">
              Bearchain Interest rate
            </div>
            <div className="text-2xl text-white">69,420%</div>
          </div>
        </div>
      </div>

      <NewRequest name="Kodiac" progress={50} title="AMM liquidity" />
      <div className="grid grid-cols-2 gap-4">
        <Request
          name="Kodiac"
          progress={50}
          title="AMM liquidity"
          img="/assets/Kodiak.jpg"
        />
        <Request
          name="Gummi"
          progress={10}
          title="Lending protocol"
          img="/assets/Gummi.jpg"
        />
        <Request
          name="Infra"
          progress={70}
          title="We need money, Fund us right now💅💅"
          img="/assets/Infra.jpg"
        />
        <Request
          name="Shogun"
          progress={38}
          title="Crosschain"
          img="/assets/Shogun.jpg"
        />
      </div>
    </main>
  );
}
