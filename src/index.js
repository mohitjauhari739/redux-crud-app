import React from "react";
import  {createRoot}  from "react-dom/client";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Show from "./Show";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
 import Add from "./Add"
import Update from "./Update";
const rootElement = document.getElementById("root") ;
const root=createRoot(rootElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Show/>}/>
<Route path="/Add" element={<Add/>}/>
<Route path="/edit/:id" element={<Update/>}/>
   </Routes>
   </BrowserRouter>
   </Provider>
    </React.StrictMode>
);