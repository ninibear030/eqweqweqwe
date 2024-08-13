import { useState } from "react";
import Image from "next/image";

export const TokenRecord = ({
  token,
  price,
  amount,
  src,
}: {
  token: string;
  price: number;
  amount: number;
  src: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <tr className=" border-b border-indigo-200  hover:bg-[#16181A] text-white transition-all duration-300">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
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
      <td className="px-6 py-4 ">${price.toLocaleString()}</td>
      <td className="px-6 py-4 ">{amount.toLocaleString()}</td>
      <td className="px-6 py-4 ">${(amount * price).toLocaleString()}</td>
    </tr>
  );
};
