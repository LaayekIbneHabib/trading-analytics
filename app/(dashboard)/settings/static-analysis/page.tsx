"use client";

// default
// import { useState } from "react";
// internal
// import theme from "@/app/theme/theme";
// external
// import { Flex, Text } from "@chakra-ui/react";
// import { FiUploadCloud } from "react-icons/fi";
// import {
//   useDropzone,
//   DropzoneRootProps,
//   DropzoneInputProps,
// } from "react-dropzone";

// const StaticAnalysis = () => {
//   const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: (acceptedFiles) => {
//       setUploadedFiles(
//         acceptedFiles.map((file) =>
//           Object.assign(file, {
//             preview: "csv",
//           })
//         )
//       );
//     },
//   });

//   const filePreviews = uploadedFiles.map((file, index) => (
//     <div key={index}>
//       <p>{file.name}</p>
//       <p>File type: {file.type}</p>
//     </div>
//   ));

//   return (
//     <Flex
//       gap={2}
//       p={5}
//       cursor="pointer"
//       sx={{ border: `1px solid ${theme.colors.brand.border}` }}
//       borderRadius={10}
//       direction="column"
//       alignItems="center"
//       {...getRootProps()}
//     >
//       <FiUploadCloud
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: theme.colors.brand.hover,
//           borderRadius: 6,
//           padding: ".5rem",
//           color: theme.colors.brand.primary,
//           fontSize: "2.75rem",
//         }}
//       />
//       <input {...getInputProps()} />
//       <Text>
//         <span style={{ color: theme.colors.brand.primary }}>
//           Click to upload{" "}
//         </span>
//         or drag and drop
//       </Text>
//       <Text fontSize={12}>CSV upto 2MB</Text>
//       <ul>
//         {uploadedFiles.map((file: File) => (
//           <li key={file.name}>{file.name}</li>
//         ))}
//       </ul>
//       {filePreviews}
//     </Flex>
//   );
// };

// export default StaticAnalysis;

import React, { useState } from "react";
import {
  useDropzone,
  DropzoneRootProps,
  DropzoneInputProps,
} from "react-dropzone";
import Papa from "papaparse"; // A library for parsing CSV data

const FileDropzone: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".csv",
    onDrop: (acceptedFiles: File[]) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: file.name, // Set preview as file name
          })
        )
      );

      // Parse CSV files and set the parsed data in state
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = Papa.parse(reader.result as string, { header: true });
          console.log("Parsed CSV data:", result.data);
          // Here you can set the parsed data in state or do further processing
        };
        reader.readAsText(file);
      });
    },
  });

  const filePreviews = files.map((file, index) => (
    <div key={index}>
      <p>{file.preview}</p>
      {/* You can display the parsed CSV data here */}
    </div>
  ));

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some CSV files here, or click to select files</p>
      </div>
      <div>{filePreviews}</div>
    </div>
  );
};

export default FileDropzone;
