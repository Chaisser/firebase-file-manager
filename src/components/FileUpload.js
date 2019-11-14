import React, { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDropzone } from "react-dropzone";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import uploadToStorage from "./../utils/upload";
import UploadListItem from "./UploadListItem";

const FileUpload = ({ showFileUpload }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const deleteFile = fileName => {
    const updatedFiles = files.filter(file => fileName !== file.name);
    setFiles(updatedFiles);
  };

  const renderFiles = files => {
    if (files.length === 0) {
      return [];
    }

    return files.map(file => (
      <UploadListItem key={file.name} file={file} deleteFile={deleteFile} />
    ));
  };

  useEffect(() => {
    console.log("getting files");
  }, [files]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUpload = async () => {
    await Promise.all(
      files.map(async file => {
        try {
          const startUpload = await uploadToStorage(file);
          if (startUpload.status === "success") {
          }
        } catch (err) {
          setError(true);
        }
      })
    );
    setFiles([]);
  };
  return (
    <div className="file-upload">
      <div className="file-upload--header">
        <span className="file-upload--title">Upload Files</span>
        <span className="file-upload--close">
          <FontAwesomeIcon
            icon={faTimes}
            color="#666"
            onClick={showFileUpload}
          />
        </span>
      </div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="dropzone__active">Drop the files here ...</p>
        ) : (
          <p className="dropzone">
            Drag 'n' drop some files here or click to select file(s)
          </p>
        )}
      </div>
      {renderFiles(files)}

      {files.length > 0 && (
        <button className="button" onClick={handleUpload}>
          Upload File(s)
        </button>
      )}

      {error && (
        <span style={{ fontSize: "12px", color: "red" }}>
          Uploads are disabled for demo session
        </span>
      )}
    </div>
  );
};

export default FileUpload;
