import { Greet } from "./components/Greet";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* berikut cara implementasi components */}
      <Greet name={"Balinux"} />
    </div>
  );
}
