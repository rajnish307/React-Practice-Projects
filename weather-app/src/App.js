import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Test from "./components/Test";
import JSXExample from "./components/JSXExample";

import "bootstrap/dist/css/bootstrap.min.css";
import Render from "./components/Render";
import PropsExample from "./components/PropsExample";
import PropsExampleClass from "./components/PropsExampleClass";
import MaterialTable from "./components/MaterialTable";
import Weather from "./components/Weather";
import CountryStateCity from "./components/Countries";
import Dropdown from "./components/Countries";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>;

function App() {
  return (
    <div className="App">
      <Weather />
      <Dropdown />
    </div>
  );
}

export default App;
