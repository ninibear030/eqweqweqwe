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
  const [amount, setAmount] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" text-indigo-200 rounded-lg underline text-right w-full text-xs">
          New Funding Request
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black">
        <DialogHeader>
          <DialogTitle>Kodiak Finance</DialogTitle>
        </DialogHeader>
        <div className="flex justify-between">
          <div> 50M/100M HONEY</div>
          <div className="mb-1 text-base font-medium dark:text-white">
            progress: {progress}%
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between">
          <div>Incentives</div>
          <div className="text-green-500">50% APR</div>
        </div>
        <div className="flex justify-between">
          <div>Tokens</div>
          <div className="text-orange-500">200K Kodiak</div>
        </div>
        <div className="flex justify-between">
          <div>Duration</div>
          <div className="text-blue-400">6 Months</div>
        </div>
        <div className="flex justify-between">
          <div></div>
          <a className="underline cursor-pointer" href="/audits">
            Audits
          </a>
        </div>
        <hr className="py-2" />
        <div>Deposit amount:</div>
        <input
          type="number"
          className="bg-white"
          value={amount}
          placeholder="enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <DialogFooter>
          <button className="mt-3 w-full p-2 bg-green-500 rounded-lg">
            New Funding Request
          </button>{" "}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
