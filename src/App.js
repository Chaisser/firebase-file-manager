import React, { useState } from "react";
import { Router, Switch, Route } from "react-router-dom";
import FileExplorer from "./components/FileExplorer";
import FileUpload from "./components/FileUpload";
import Footer from "./components/Footer";
import { createBrowserHistory } from "history";
import "normalize.css";
import "./styles/styles.scss";
function App() {
  const RenderApp = () => {
    const [fileExplorer, setFileExplorer] = useState(true);
    const [fileUpload, setFileUpload] = useState(false);
    const showFileExplorer = () => {
      setFileExplorer(!fileExplorer);
    };

    const showFileUpload = () => {
      setFileUpload(!fileUpload);
    };
    return (
      <div className="background">
        {fileExplorer && <FileExplorer showFileExplorer={showFileExplorer} />}
        {fileUpload && <FileUpload showFileUpload={showFileUpload} />}
        <Footer
          showFileExplorer={showFileExplorer}
          showFileUpload={showFileUpload}
        />
      </div>
    );
  };

  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route component={RenderApp} />
      </Switch>
    </Router>
  );
}

export default App;
