import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import SelectionPage from "./pages/SelectionPage/SelectionPage";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/selectionPage" component={SelectionPage} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
