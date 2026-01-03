 "use client";

import React, { useState } from "react";
// Import Twilio only if you plan to use it in server-side functions or API routes
// import Twilio from "twilio";

const DocumentUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploaded(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    // Placeholder: Implement actual upload logic here
    // e.g., upload to Dropbox, AWS S3, or your database
    console.log("Uploading file:", file.name);

    setUploaded(true);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h2>Upload Document</h2>

      <input
        type="file"
        onChange={handleFileChange}
        style={{ margin: "1rem 0" }}
      />

      <button
        onClick={handleUpload}
        disabled={!file}
        style={{
          backgroundColor: "#2563eb",
          color: "#fff",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Upload
      </button>

      {uploaded && (
        <p style={{ color: "green", marginTop: "1rem" }}>
          ✅ File uploaded successfully!
        </p>
      )}
    </div>
  );
};

export default DocumentUpload;



