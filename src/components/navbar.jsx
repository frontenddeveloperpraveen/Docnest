import { Share, Share2Icon } from "lucide-react";
import React from "react";
const navbar = ({ toggleDialog, download, openFile }) => {
  return (
    <>
      <nav className="flex px-5 pt-5 justify-between">
        <div className="flex">
          <img
            src="https://1000logos.net/wp-content/uploads/2023/01/Google-Docs-logo-2048x1152.png"
            alt=""
            width={60}
          />
          <div className="flex">
            <b id="title-docs" className="h-max" contentEditable>
              Untitiled Docs
            </b>
            <b>.pxt</b>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <div className="hover:border rounded-full hover:border-gray-800 cursor-pointer p-2 flex justify-center items-center">
              <span onClick={toggleDialog}>
                <Share2Icon />
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="px-9 pt-2 flex gap-3 text-sm cursor-pointer w-max toolbar">
        <a href="/" target="_blank">
          <p>New</p>
        </a>
        <p>
          <span hidden>
            <input type="file" accept=".ptx" id="fileInput" />
          </span>
          <h1
            onClick={() => {
              openFile();
            }}
          >
            Open
          </h1>
        </p>
        <p onClick={() => window.print()}>Print</p>
        <p onClick={() => download()}>Download</p>
      </div>
    </>
  );
};

export default navbar;
