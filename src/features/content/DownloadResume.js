import React from "react";
import { saveAs } from "file-saver";

function DownloadResume() {
  const saveFile = () => {
    saveAs(
      "https://docs.google.com/document/d/1imwRKLOUYCOu8yL3XHxzlcO2GQ4KgtUkTw9nihYFCRw/export?format=pdf",
      "moises's_resume.pdf"
    );
  };
  return (
    <div className="overlap-group-3">
      <button
        onClick={saveFile}
        type="button"
        className="get-my-resume roboto-bold-white-16px"
      >
        Get my resume
      </button>
    </div>
  );
}

export default DownloadResume;
