import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1 className="text-orange-500 font-custom text-5xl">Content</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
