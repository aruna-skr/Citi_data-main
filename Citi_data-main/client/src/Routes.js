import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Update from "./pages/Update";
import Delete from "./pages/Delete";

export default function Routes1() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/insert" exact component={Insert} />
      <Route path="/update" exact component={Update} />
      <Route path="/delete" exact component={Delete} />
    </Switch>
  );
}
