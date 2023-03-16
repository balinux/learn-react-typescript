import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import Button2 from "./components/Button2";
import { Input } from "./components/Input";
import "./styles.css";
import { Container } from "./components/Container";

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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!");
  };

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1> */}
      {/* <h2>Start editing to see some magic happen!</h2> */}
      {/* berikut cara implementasi components */}
      {/* <Greet name={"Balinux"} age={21} isMarriage={true} />
      <Person name={person} />

      <PersonList names={nameList} />

      <hr />
      <Status status={"loading"} />

      <Heading children={"tes"} />
      <Oscar>
        <Heading children={"react component type"} />
      </Oscar> */}
      {/* contoh props button */}

      <Person name={person} />

      <Button
        handleClick={() => {
          alert("button clicked");
        }}
      />
      <Button2 onClick={handleClick} />;
      <Input value="" handleChange={(event) => console.log(event)} />
      
      {/* example style props */}
      <Container style={{border:'1px solid black' ,padding:'1rem'}}/>
    </div>
  );
}
