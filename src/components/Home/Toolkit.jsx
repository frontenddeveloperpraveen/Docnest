import {
  ArrowDownZAIcon,
  ArrowUpDown,
  List,
  LucideArrowUpZA,
} from "lucide-react";
import React from "react";

const Toolkit = () => {
  return (
    <div className="w-[80vw] mx-auto mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold cursor-text">Recent Documents</h1>
        <div className="flex gap-5">
          <List className="cursor-pointer hover:bg-[#f0f4ee] rounded-full p-2 box-content" />
          <ArrowUpDown className="cursor-pointer hover:bg-[#f0f4ee] rounded-full p-2 box-content" />
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
