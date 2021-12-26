import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import SelectionPage from "./pages/SelectionPage/SelectionPage";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage";
import SuccessfulPage from "./pages/SuccessfulPage/SuccessfulPage";

import Popups from "./components/Popups/Popups";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/selectionPage" component={SelectionPage} />
        <Route exact path="/successfulPage" component={SuccessfulPage} />
        <Route exact path="/ConfirmPage" component={ConfirmPage} />
        <Route exact path="/PopupsPage" component={Popups} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
