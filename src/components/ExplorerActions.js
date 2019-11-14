import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faLongArrowAltUp,
  faSearch,
  faHome
} from "@fortawesome/free-solid-svg-icons";

const ExplorerActions = ({ history }) => {
  const renderPath = pathname => {
    const getPaths = pathname.split("/");
    return getPaths.map((urlPath, index) => {
      return urlPath && <li key={index}>{urlPath}</li>;
    });
  };
  return (
    <div className="file-explorer--actions">
      <div>
        <span>
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
            color="#ccc"
            onClick={() => history.goBack()}
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            color="#ccc"
            onClick={() => history.goForward()}
          />
        </span>
        <span>
          <FontAwesomeIcon icon={faLongArrowAltUp} color="#666" />
        </span>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} color="gold" />
            </Link>
          </li>

          {renderPath(history.location.pathname)}
        </ul>
      </div>
      <div>
        <div>
          <form className="form--search">
            <input
              placeholder="Search your files"
              type="text"
              className="input--search"
            />
            <button type="submit" className="button--search">
              <FontAwesomeIcon icon={faSearch} size="sm" color="#7d7d7d" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExplorerActions;
