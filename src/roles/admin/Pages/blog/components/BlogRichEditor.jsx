import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const BlogEditor = ({ setContent }) => {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (!quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write your blog content here...",
        modules: {
          toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });

      quillInstance.current.on("text-change", () => {
        const html = quillInstance.current.root.innerHTML;
        setContent(html);
      });
    }
  }, []);

  return (
    <div>
      <p className="text-[#2C2C2C] text-[16px] font-semibold mb-2">
        Blog Content
      </p>

      <div className="bg-white rounded-xl border border-gray-300">
        <div
          ref={editorRef}
          className="w-full 2xl:w-[500px]"
          style={{ height: "250px" }}
        />
      </div>
    </div>
  );
};

export default BlogEditor;