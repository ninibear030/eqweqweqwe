import React from "react";

//@ts-ignore
export const Slider = ({ mojiIndex, setMojiIndex }) => {
  const mojis = [
    "😄",
    "🙂",
    "😐",
    "😑",
    "☹️",
    "😩",
    "😠",
    "😡",
    "🤢",
    "😤",
    "💩",
  ];

  const handleRangeChange = (e:any) => {
    setMojiIndex(Number(e.target.value));
  };

  return (
    <div>
      <div className="w-[600px] container flex flex-col gap-4 items-center">
        <div className="moji text-9xl">{mojis[mojiIndex]}</div>
        <div className="flex gap-8 justify-between w-full">
          <span className="text-3xl text-green-500">Safe</span>
          <input
            type="range"
            value={mojiIndex}
            min="0"
            max="10"
            step="1"
            onChange={handleRangeChange}
            className="w-full"
          />
          <span className="text-3xl text-red-500">Risky</span>
        </div>
      </div>
    </div>
  );
};
