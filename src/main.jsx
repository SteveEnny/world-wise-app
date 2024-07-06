import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//installing Eslint
// npm install  eslint vite-plugin-eslint eslint-config-react-app --save-de
// create a new file called .eslintrc.json
// then create an object { 'extends' : react-app}
// add eslint plugin to vite.config.js ---> eslint();
