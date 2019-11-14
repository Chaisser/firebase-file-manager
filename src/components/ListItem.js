import React, { useEffect, useState } from "react";
import moment from "moment";
import { storage } from "./../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFile } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ file, getFiles }) => {
  const [fileInfo, setFileInfo] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3500);
  }, [error]);
  useEffect(() => {
    const getFileInfo = async fileName => {
      const result = await storage.ref(`${fileName}`).getMetadata();
      setFileInfo(result);
    };
    getFileInfo(file.fullPath);
  }, [file]);

  const bytesToSize = bytes => {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  };

  const downloadFile = async file => {
    try {
      const url = await storage.ref(file).getDownloadURL();
      if (url) {
        window.open(url);
      }
    } catch (error) {
      console.log(error);
    }
    return console.log("downloaded");
  };
  const deleteFile = async file => {
    try {
      await storage.ref(file).delete();
      getFiles();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <li>
      <span onClick={() => downloadFile(fileInfo.fullPath)}>
        <FontAwesomeIcon icon={faFile} color="#04A0FF" /> {file.name}
      </span>
      <span>
        {fileInfo && moment(fileInfo.timeCreated).format("DD.MM.YYYY HH:mm")}
      </span>
      <span>{fileInfo && fileInfo.contentType}</span>
      <span>{fileInfo && bytesToSize(fileInfo.size)}</span>

      <span className="actions">
        <FontAwesomeIcon
          icon={faTrash}
          color="red"
          onClick={() => deleteFile(fileInfo.fullPath)}
        />
      </span>
      {error && (
        <div
          style={{
            position: "fixed",
            bottom: "50px",
            right: "20px",
            textAlign: "center",
            padding: "10px",
            width: "200px",
            background: "rgba(251, 49, 49, 0.52)",
            color: "#d04d64"
          }}
        >
          Delete is not available in demo mode
        </div>
      )}
    </li>
  );
};

export default ListItem;
