import { CrossIcon, SearchIcon, X } from "lucide-react";
import React from "react";

const inputEvent = (event) => {
  var Inputer = document.getElementById("docs-search-tool");
  var close = document.getElementById("docs-close-tool");
  console.log(event);
  if (Inputer.value === "") {
    close.classList.add("hidden");
  }
  switch (event) {
    case "change": {
      if (Inputer.value !== "") {
        close.classList.remove("hidden");
      }
      break;
    }
    case "close": {
      close.classList.remove("hidden");
      Inputer.value = "";
      break;
    }
  }
};

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center  ">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
          alt=""
          with={100}
        />
        <h1 className="text-xl font-semibold">DocNest</h1>
      </div>
      <div className="search flex border w-[720px] h-[48px] justify-center items-center px-5 rounded-3xl bg-[#f0f4f9] gap-3 focus-within:bg-white focus-within:shadow-md">
        <span className="w-6">
          <SearchIcon className="hover:bg-[#f0f4ee] hover:border-gray-400 hover:border hover:rounded-full p-1 box-content hover:transition-all hover:duration-500 hover:ease-in-out cursor-pointer " />
        </span>
        <input
          type="text"
          id="docs-search-tool"
          placeholder="Search"
          autoComplete="off"
          className="w-[100%] h-[100%] px-2 outline-none bg-transparent text-lg"
          onChange={() => {
            inputEvent("change");
          }}
        />
        <span className="w-6">
          <X
            id="docs-close-tool"
            className="hover:bg-[#f0f4ee] hover:border-gray-400 hover:border hover:rounded-full p-1 box-content hover:transition-all hover:duration-500 hover:ease-in-out cursor-pointer hidden "
            onClick={() => inputEvent("close")}
          />
        </span>
      </div>
      <div>
        <div className="flex">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
            alt=""
          />
          <img
            src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
