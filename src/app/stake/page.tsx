export default function Home() {
  return (
    <main>
      <div className="text-2xl mb-2">Interlock</div>
      <div className="text-xl mb-10">Institution-level staking for all</div>
      <div className="mx-auto w-[400px] text-center flex flex-col gap-4">
        <div className="text-3xl">BERA Staking Portal</div>
        <input type="number" className="w-full" />
        <div className=" justify-between flex">
          <div>APY</div>
          <div className="text-green-400">24.43%</div>
        </div>
        <button className="w-full bg-indigo-200  text-black p-2 rounded-md">
          Stake BERA
        </button>
      </div>
    </main>
  );
}
