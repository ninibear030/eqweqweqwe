import { useState } from "react";
import { TokenRecord } from "./token";

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

export const Portfolio = ({

}: {

}) => {
  const [open, setOpen] = useState(false);
  return (


<div className="overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-b border-indigo-200">
        <thead className="text-xs text-white uppercase border-b border-indigo-200  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Token
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    USD Value
                </th>
                <th scope="col" className="px-6 py-3">
                </th>
            </tr>
        </thead>
        <tbody>
            <TokenRecord token="HONEY" price={1.001} amount={1020095.2063} src="/assets/honey.png"/>
            <TokenRecord token="BERA" price={100000.7} amount={1000} src="/assets/bera.png"/>
            <TokenRecord token="WETH" price={3424.7} amount={102.2063} src="/assets/weth.png"/>
        </tbody>
    </table>
</div>

);
};
