import React from "react";

const WebsiteViewer = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <iframe
        src="https://www.ldrp.ac.in/scheme-computer-cbcs/" // Yahan apni desired website ka URL daalein
        title="Website Viewer"
        className="w-[90%] h-[90%] border rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default WebsiteViewer;
