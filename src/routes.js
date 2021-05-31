import React from "react";
import { Route, BrowserRouter as Router, useLocation, Switch, Redirect } from "react-router-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./Home";

export default function routes() {
   return (
      <>
         <Provider store={store}>
            <Route path="/" exact>
               <App />
            </Route>
            <Route path="/home" exact>
               <Home />
            </Route>
         </Provider>
      </>
   );
}
