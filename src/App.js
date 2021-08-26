import "./App.css";
import { Navbar } from "./components/Navbar";
import Navside from "./components/Navside";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Navside />
          <div className="col-sm-10">
            <div className="row">
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
