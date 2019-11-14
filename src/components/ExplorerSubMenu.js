import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
const ExplorerSubMenu = () => {
  return (
    <div className="file-explorer--menu">
      <nav>
        <ul>
          <li className="active-menu">File</li>
          <li>Display</li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faQuestionCircle} color="#0078D7" />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default ExplorerSubMenu;
