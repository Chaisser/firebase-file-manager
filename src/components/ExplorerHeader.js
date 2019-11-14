import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faTimes } from "@fortawesome/free-solid-svg-icons";
const ExplorerHeader = ({ showFileExplorer, title }) => {
  return (
    <div className="file-explorer--topbar">
      <div>
        <span className="header-icon" data-title={title}>
          <FontAwesomeIcon icon={faFolder} color="gold" />
        </span>
      </div>

      <div>
        <span>
          <FontAwesomeIcon
            icon={faTimes}
            color="#ccc"
            onClick={showFileExplorer}
          />
        </span>
      </div>
    </div>
  );
};
export default ExplorerHeader;
