import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Route path="/" component={LandingPage} exact />
    </Router>
  );
}

export default App;
