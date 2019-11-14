import React, { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import { storage } from "./../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./ListItem";
import ExplorerHeader from "./ExplorerHeader";
import ExplorerSubMenu from "./ExplorerSubMenu";
import ExplorerActions from "./ExplorerActions";

const FileExplorer = ({ showFileExplorer }) => {
  const history = createBrowserHistory();
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);

  const getFiles = async () => {
    const listRef = await storage.ref(history.location.pathname).listAll();
    setFiles(listRef.items);
    setFolders(listRef.prefixes);
  };

  useEffect(() => {
    getFiles();
  }, [history.location.pathname]);

  const renderFiles = files => {
    if (files.length === 0) {
      return (
        <li>
          <span>There is no file(s) in this folder.</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </li>
      );
    }

    return files.map(file => {
      return <ListItem file={file} key={file.name} getFiles={getFiles} />;
    });
  };
  const renderFolders = folders => {
    if (folders.length === 0) {
      return null;
    }

    return folders.map(folder => {
      return (
        <li key={folder.name}>
          <span>
            <Link to={`/${folder.name}`}>
              <FontAwesomeIcon icon={faFolder} color="gold" /> {folder.name}
            </Link>
          </span>
          <span></span>
          <span>Folder</span>
          <span></span>
          <span></span>
        </li>
      );
    });
  };
  return (
    <div className=" file-explorer">
      <ExplorerHeader
        showFileExplorer={showFileExplorer}
        title={"Firebase File Manager by Doruk Karaboncuk"}
      />

      <ExplorerActions history={history} />
      <ExplorerSubMenu />
      <div className="file-explorer--body">
        <div className="file-explorer--sidebar">
          <span className="sidebar--title">Favourite(s)</span>
        </div>

        <div className="file-explorer--main">
          <ul className="list--file">
            <li>
              <span className="button--sort">Name</span>
              <span className="button--sort">Created</span>
              <span className="button--sort">Type</span>
              <span className="button--sort">Size</span>
              <span className="button--sort">Actions</span>
            </li>

            {renderFolders(folders)}

            {renderFiles(files)}
          </ul>
        </div>
      </div>
      <div className="file-explorer--footer">
        {folders.length} folder(s) and {files.length} file(s)
      </div>
    </div>
  );
};

export default FileExplorer;
