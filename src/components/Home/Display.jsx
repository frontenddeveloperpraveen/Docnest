import {
  Book,
  BookAIcon,
  BookOpen,
  Dot,
  DotSquare,
  EllipsisVertical,
  FolderOpen,
} from "lucide-react";
import React from "react";

const Display = () => {
  return (
    <div className="w-[80vw] mx-auto mt-8 flex gap-9 flex-wrap">
      <a href="/">
        <div className="border border-gray-200 rounded-md w-max h-max py-2 cursor-pointer flex flex-col justify-center items-center hover:border-blue-500">
          <div className="img w-[200px] h-[180px] overflow-hidden border-b-[2px] border-black justify-center items-center flex px-2 box-content">
            <img src="https://i.ibb.co/HpDr1Fm/abc.png" alt="" />
          </div>
          <div className="mt-3 w-full">
            <h1 className="px-2">Mr Doc</h1>
            <div className="flex justify-between items-center w-full">
              <div className="pl-2 flex gap-2 justify-center items-center">
                <FolderOpen color="black" />
                <h1 className="text-sm">
                  <span>Opened</span> <span>11.15 AM</span>
                </h1>
              </div>
              <EllipsisVertical className="cursor-pointer hover:bg-[#f0f4ee] rounded-full p-2 box-content " />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Display;
