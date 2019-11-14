import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const UploadListItem = ({ index, file, deleteFile }) => {
  return (
    <div className="list--uploadFiles" id={`file-${index}`}>
      <span className="uploadFiles--title">{file.name}</span>

      <span className="uploadFiles--actions">
        <FontAwesomeIcon
          icon={faTimes}
          color="red"
          onClick={() => deleteFile(file.name)}
        />
      </span>
    </div>
  );
};

export default UploadListItem;
