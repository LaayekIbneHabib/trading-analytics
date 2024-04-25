"use client";

// default
import React, { useState } from "react";
// external
import { Box, Text } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setUploadedFiles(acceptedFiles);
      // Call your backend API endpoint to upload files
    },
  });

  return (
    <Box {...getRootProps()}>
      <input {...getInputProps()} />
      <Text as="p">Drag and drop files here or click to browse.</Text>
      <ul>
        {uploadedFiles.map((file: File) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </Box>
  );
};

export default FileUpload;
