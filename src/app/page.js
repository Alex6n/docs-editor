"use client";

import React, { useRef, useState } from "react";
import DocsEditor from "@/components/DocsEditor";
import docsParser from "@/utils/docsParser";

export default function Home() {
  const fileRef = useRef(null);
  const [docData, setDocData] = useState("Initial Value");

  const clickHandler = () => {
    docsParser(fileRef.current.files[0])
      .then((resultValue) => {
        setDocData(resultValue);
      })
      .catch((error) => {
        console.error("Error parsing document:", error);
      });
  };

  return (
    <div>
      <input type="file" ref={fileRef} />
      <button onClick={clickHandler}>Start Editing</button>
      <DocsEditor docData={docData} />
    </div>
  );
}
