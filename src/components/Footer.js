import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faFileAlt,
  faFolder,
  faFileUpload
} from "@fortawesome/free-solid-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";

import CurrentTime from "./CurrentTime";

const Footer = ({ showFileExplorer, showFileUpload }) => {
  return (
    <div className="footer-container">
      <div className="footer-container--icons">
        <span className="taskbar-icon">
          <FontAwesomeIcon size="lg" icon={faWindows} color="white" />
        </span>
        <span className="taskbar-icon" onClick={showFileExplorer}>
          <FontAwesomeIcon size="lg" icon={faFolder} color="white" />
        </span>
        <span className="taskbar-icon">
          <FontAwesomeIcon size="lg" icon={faFileAlt} color="white" />
        </span>
        <span className="taskbar-icon" onClick={showFileUpload}>
          <FontAwesomeIcon size="lg" icon={faFileUpload} color="white" />
        </span>
      </div>
      <div className="footer-container--meta">
        <div className="date-time-container">
          <span className="date-time-container--time">
            <CurrentTime />{" "}
          </span>
          <span className="date-time-container--date">
            {moment().format("DD.MM.YYYY")}
          </span>
        </div>

        <div className="notifications-container">
          <FontAwesomeIcon icon={faCommentAlt} color="white" />
          <span className="notifications--label">5</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
