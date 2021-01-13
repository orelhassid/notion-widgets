import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import WidgetsClocks from "./pages/widgets/WidgetsClocks";
function App() {
  return (
    <Switch>
      <Route to="/" component={WidgetsClocks} />
    </Switch>
  );
}

export default App;
