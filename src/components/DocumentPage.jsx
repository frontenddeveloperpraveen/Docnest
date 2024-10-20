import React, { useCallback, useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import ReactQuill, { Quill } from "react-quill";
import Navbar from "./navbar";
import "./Textpage.css";
import { io } from "socket.io-client";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],
  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  ["clean"],
];

const DocumentPage = () => {
  const { id: documentId } = useParams();
  const [socket, setSocket] = useState(null);
  const [quill, setQuill] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: {
        toolbar: toolbarOptions,
      },
    });
    setQuill(q);
  }, []);

  useEffect(() => {
    const s = io("http://localhost:5000");
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (data) => {
      quill.updateContents(data);
    };
    socket.on("recieve-changes", handler);
    return () => {
      socket.off("recieve-changes", handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (quill == null || socket == null) return;
    const handler = (data, oldData, source) => {
      if (source !== "user") return;
      socket.emit("send-changes", data);
    };
    quill.on("text-change", handler);
    return () => {
      quill.off("text-change", handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;
    socket.once("load-document", (document) => {
      quill.setContents(document);
    });
    socket.emit("get-document", documentId);
  }, [socket, quill, documentId]);

  const toggleDialog = () => {
    setDialogOpen((prev) => !prev);
  };

  const download = () => {
    const content = quill.getContents(); // Quill's Delta object
    const contentString = JSON.stringify(content);
    const encoder = new TextEncoder();
    const binaryData = encoder.encode(contentString);
    const blob = new Blob([binaryData], { type: "application/octet-stream" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    const name = document.getElementById("title-docs").textContent;
    link.download = `${name}.ptx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openFile = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();

    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      console.log(file);

      const reader = new FileReader();
      reader.onload = function (e) {
        const fileContent = e.target.result;
        console.log(fileContent);
        try {
          const parsedContent = JSON.parse(fileContent);
          quill.setContents(parsedContent);
        } catch (error) {
          console.error("Error parsing file content as JSON", error);
        }
      };

      reader.readAsText(file);
    });
  };

  return (
    <>
      <Navbar
        toggleDialog={toggleDialog}
        download={download}
        openFile={openFile}
      />
      {/* <Dialog url={documentId} isOpen={isDialogOpen} /> */}
      <div className="main px-8 mt-2 min-h-[75vh]" ref={wrapperRef}></div>
    </>
  );
};

export default DocumentPage;
