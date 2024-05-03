'use client';

// default
import { useState } from 'react';
// external
import { Flex, Text } from '@chakra-ui/react';
import { FiUploadCloud } from 'react-icons/fi';
import { useDropzone } from 'react-dropzone';
// internal
import theme from '../../../theme/theme';
import CustomBorder from '../customBorder';

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setUploadedFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: 'csv',
          }),
        ),
      );
    },
  });

  const filePreviews = uploadedFiles.map((file, index) => (
    <div key={index}>
      <p>{file.name}</p>
      <p>File type: {file.type}</p>
    </div>
  ));

  return (
    <CustomBorder>
      <Flex
        gap="1rem"
        p="2rem"
        cursor="pointer"
        direction="column"
        alignItems="center"
        {...getRootProps()}
      >
        <FiUploadCloud
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.brand.light,
            borderRadius: '0.25rem',
            padding: '.5rem',
            color: theme.colors.brand.primary,
            fontSize: '2.75rem',
          }}
        />
        <input {...getInputProps()} />
        <Text>
          <span style={{ color: theme.colors.brand.primary }}>Click to upload </span>
          or drag and drop
        </Text>
        <Text fontSize={12}>CSV upto 2MB</Text>
        <ul>
          {uploadedFiles.map((file: File) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
        {filePreviews}
      </Flex>
    </CustomBorder>
  );
};

export default FileUpload;
