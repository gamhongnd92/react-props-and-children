import logo from "./logo.svg";
import "./App.css";
import Bag from "./components/Bag";
import Apples from "./components/Apples";
import Pears from "./components/Pears";

const bool = false;
const str1 = "just";

function Example(props) {
  return (
    <div>
      <h2>
        The value of the toggleBoolean prop is {props.toggleBoolean.toString()}
      </h2>
      <p>
        The value of the math prop is: <em>{props.math}</em>
      </p>
      <p>
        The value of the str prop is: <em>{props.str}</em>
      </p>
    </div>
  );
}

function Logo(props) {
  const userPic = <img src={logo} />;
  return userPic;
}

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
      <Example
        toggleBoolean={!bool}
        math={(10 + 20) / 3}
        str={str1 + " another string"}
      />
      <Logo />
    </div>
  );
}

export default App;
