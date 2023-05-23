import React from "react";
import  {createRoot}  from "react-dom/client";
import Show from "./Show";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
const rootElement = document.getElementById("root") ;
const root=createRoot(rootElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
   <Show/>
   </Provider>
    </React.StrictMode>
);