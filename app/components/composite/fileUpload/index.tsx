"use client";

import React, { useState } from "react";
import {
  useDropzone,
  DropzoneRootProps,
  DropzoneInputProps,
} from "react-dropzone";

interface FileUploadProps {}

const FileUpload: React.FC<FileUploadProps> = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setUploadedFiles(acceptedFiles);
      // Call your backend API endpoint to upload files
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop files here or click to browse.</p>
      <ul>
        {uploadedFiles.map((file: File) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
