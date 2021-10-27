import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <Router>
      <ChakraProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ChakraProvider>
    </Router>
  );
};
