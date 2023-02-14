import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../ui/button/button";
import MyInput from "../../ui/input/input";

const TextEditor = () => {
  const [quillValue, setQuillValue] = useState<string>("");
  const [titleValue, setTitleValue] = useState<string>("");
  const submitHandler = () => {
    console.log('тук тук')
  }
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
    <div className="bg-white grid grid-flow-cols justify-items-center">
      <div className="pb-2">
        <MyInput
          type="text"
          value={titleValue}
          placeholder="Заголовок статьи"
          onChangeHandler={(e) => {
            setTitleValue(e.target.value);
          }}
          className="px-64"
        />
      </div>
      <div className="pt-2">
        <ReactQuill
          theme="snow"
          value={quillValue}
          onChange={setQuillValue}
          modules={modules}
        />
      </div>
      <div className="pt-2 justify-self-end">
        <Button title="Сохранить" onClickHandler={()=>{submitHandler()}}/>
      </div>
    </div>
  );
};

export default TextEditor;
