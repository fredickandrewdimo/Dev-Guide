import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Create from "./components/Create";
import AllGuides from "./components/AllGuides";
import GuideDetails from "./components/GuideDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App bg-neutral-900 font-inter min-h-screen">
        <Navbar />
        <div className="mx-auto w-11/12 md:w-9/12  md:my-28 my-20">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/guides">
              <AllGuides />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <GuideDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
