import React from "react";
import { Route } from "react-router-dom";
import UploadSingleImage from "./pages/UploadSingleImage";
import './App.css';

const App = () => {
  return (
      <div className="App">
        <Route path="/one_img" component={UploadSingleImage} exact />
      </div>
  );
}

export default App;
