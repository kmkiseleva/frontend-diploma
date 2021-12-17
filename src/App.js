import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import SelectionPage from "./pages/SelectionPage/SelectionPage";
import SuccessfulPage from "./pages/SuccessfulPage/SuccessfulPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/selectionPage" component={SelectionPage} />
        <Route exact path="/successfulPage" component={SuccessfulPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
