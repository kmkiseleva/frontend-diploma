import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import SelectionPage from "./pages/SelectionPage/SelectionPage";
import SelectSeatsPage from "./pages/SelectSeatsPage/SelectSeatsPage";
import PassengersPage from "./pages/PassengersPage/PassengersPage";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage";
import SuccessfulPage from "./pages/SuccessfulPage/SuccessfulPage";
import PayPage from "./pages/PayPage/PayPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/selection" component={SelectionPage} />
        <Route exact path="/seats" component={SelectSeatsPage} />
        <Route exact path="/passengers" component={PassengersPage} />
        <Route exact path="/pay" component={PayPage} />
        <Route exact path="/check" component={ConfirmPage} />
        <Route exact path="/success" component={SuccessfulPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
