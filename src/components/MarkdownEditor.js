import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("#Hello world");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreview(markdown);
    }, 100); // debouncing for smoother updates
    return () => clearTimeout(timeout);
  }, [markdown]);

  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter markdown here..."
      />
      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </>
  );
}

export default MarkdownEditor;
