import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-neutral-900 font-inter min-h-screen">
      <Navbar />
      <div className="mx-auto w-11/12 md:w-9/12 py-28 min-h-screen">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
