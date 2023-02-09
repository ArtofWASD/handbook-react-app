import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      [{ font: [] }],
      [
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "link",
        "header",
        "font",
        "size",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
        { align: [] },
      ],
    ],
  };
  return (
    <div className="bg-white mt-10">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </div>
  );
};

export default TextEditor;
