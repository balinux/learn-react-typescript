import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import "./styles.css";

export default function App() {
  // constoh props data object
  const person = {
    first: "rio",
    last: "jp",
  };

  // props data array
  const nameList = [
    {
      first: "rio",
      last: "jp",
    },
    {
      first: "xxx",
      last: "xxxxx",
    },
    {
      first: "ccc",
      last: "ccccc",
    },
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* berikut cara implementasi components */}
      <Greet name={"Balinux"} age={21} />
      <Person name={person} />

      <PersonList names={nameList} />
    </div>
  );
}
