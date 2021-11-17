import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
  return (
    <Router>
      <Route path="/" component={Main} exact />
    </Router>
  );
}

export default App;
