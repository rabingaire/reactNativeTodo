import React from "react";
import { NativeRouter, Route } from "react-router-native";
import Home from "./Containers/Home";

const Routes = () => (
  <NativeRouter>
    <Route exact path="/" component={Home} />
  </NativeRouter>
);

export default Routes;
