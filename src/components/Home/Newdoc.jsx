import { Pencil, Plus } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const iconChange = (state) => {
  const pencil = document.getElementById("pencil-frame");
  const plus = document.getElementById("plus-frame");
  switch (state) {
    case "start": {
      plus.classList.add("hidden");
      pencil.classList.remove("hidden");
      break;
    }

    case "end": {
      plus.classList.remove("hidden");
      pencil.classList.add("hidden");
      break;
    }

    case "click": {
      alert("hi");

      break;
    }
  }
};

const Newdoc = () => {
  const navigate = useNavigate();
  const newDOc = () => {
    alert("hi");
    navigate("/");
  };
  return (
    <div
      className="rounded-full absolute bottom-10 right-10 bg-gray-100 p-4 box-content shadow-lg cursor-pointer hover:bg-gray-200 "
      onMouseEnter={() => {
        iconChange("start");
      }}
      onMouseLeave={() => {
        iconChange("end");
      }}
      onClick={() => {
        newDOc();
      }}
    >
      <span className="" id="plus-frame">
        <Plus id="icon-logo" />
      </span>
      <span id="pencil-frame" className="hidden">
        <Pencil id="icon-logo" />
      </span>
    </div>
  );
};

export default Newdoc;
