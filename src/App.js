import logo from "./logo.svg";
import "./App.css";
import Bag from "./components/Bag";
import Apples from "./components/Apples";
import Pears from "./components/Pears";

function App() {
  return (
    <div className="App">
      <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Anna" />
      </Bag>
      {/* <Bag>
        <Pears friend="Anna" />
      </Bag> */}
    </div>
  );
}

export default App;
