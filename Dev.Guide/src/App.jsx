import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Create from "./components/create";
import AllGuides from "./components/AllGuides";
import GuideDetails from "./components/GuideDetails";

function App() {
  return (
    <Router>
      <div className="App bg-neutral-900 font-inter min-h-screen">
        <Navbar />
        <div className="mx-auto w-11/12 md:w-9/12 py-28 min-h-screen">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/guides">
              <AllGuides />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <GuideDetails />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
