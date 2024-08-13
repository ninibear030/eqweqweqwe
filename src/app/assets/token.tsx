import { useState } from "react";
import Image from "next/image";

export const TokenRecord = ({
  token,
  price,
  amount,
  src
}: {
  token: string;
  price: number;
  amount: number;
  src: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <tr className=" border-b border-indigo-200 hover:bg-indigo-100 hover:text-[#16181a] text-white transition-all duration-300">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex items-center gap-4">
            <Image
                src={src}
                alt={token}
                className="rounded-full w-8 h-8"
                width={50}
                height={50}
            />
             {token}
            </div>
        </th>
        <td className="px-6 py-4 ">
            ${price}
        </td>
        <td className="px-6 py-4 ">
            {amount}
        </td>
        <td className="px-6 py-4 ">
            ${amount * price}
        </td>
        <td className="px-6 py-4 text-right">
        <button className="rounded-lg bg-indigo-200  p-2">
            <a href="#" className="font-medium text-[#16181a]">Invest</a>
          </button>
        </td>
    </tr>
);
};
