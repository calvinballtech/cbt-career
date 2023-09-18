// @ts-nocheck

"use client";

import { useState } from "react";
import axios from "axios";

export default function Test() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const result = await axios("/api/v1/data-submission", {
      method: "POST",
      data: formData,
      responseType: "arraybuffer",
    });
    console.dir(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" onChange={handleFileChange} />
      <button type="submit">Upload File</button>
    </form>
  );
}
