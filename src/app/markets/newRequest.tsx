import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/dialog";
import { Link } from "lucide-react";

export const NewRequest = ({
  name,
  title,
  progress,
}: {
  name: string;
  title: string;
  progress: number;
}) => {
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [amount, setAmount] = useState(0);
  const [selectedToken, setSelectedToken] = useState("HONEY");
  const [requestAmount, setRequestAmount] = useState(0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-indigo-200 rounded-lg underline text-right w-full font-bold">
          New Funding Request
        </button>
      </DialogTrigger>
      <DialogContent className="w-[600px] bg-[#16181A] border-[#202426]">
        <DialogTitle className="text-lg">Funding Details 🥰💰</DialogTitle>

        <div className="flex justify-between mt-10 items-center">
          <div className="text-sm">TVL Requested ($)</div>
          <input
            type="number"
            className="w-1/2 text-white rounded-lg border-[#202426] bg-transparent"
            value={amount}
            placeholder="enter amount"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm">Incentives</div>
          <div className="w-1/2 flex space-x-2">
            <input
              type="number"
              className="w-1/2 text-white rounded-lg border-[#202426] bg-transparent"
              value={requestAmount}
              placeholder="amount"
              onChange={(e) => setRequestAmount(Number(e.target.value))}
            />
            <select
              className="w-1/2 text-white rounded-lg border-[#202426] bg-transparent"
              value={selectedToken}
              onChange={(e) => setSelectedToken(e.target.value)}
            >
              <option value="BERA">BERA</option>
              <option value="HONEY">HONEY</option>
              <option value="KODIAK">KODIAK</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm">Duration (months)</div>
          <input
            type="number"
            className="w-1/2 text-white rounded-lg border-[#202426] bg-transparent"
            value={duration}
            placeholder="enter months"
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm">Vesting</div>
          <select
            className="w-1/2 text-white rounded-lg border-[#202426] bg-transparent"
            value={selectedToken}
            onChange={(e) => setSelectedToken(e.target.value)}
          >
            <option value="LINEAR">LINEAR</option>
            <option value="CUSTOM">CUSTOM</option>
          </select>
        </div>

        <DialogFooter>
          <button className="mt-3 w-full p-2 bg-indigo-200 rounded-lg text-[#202426] font-bold">
            Click here to beg for money 🙏
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
