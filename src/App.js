import "./styles.css";
import Directory from "./Directory";
import data from "./data";
export default function App() {
  console.log(data, "mmmsdf");
  debugger;
  return (
    <div className="App">
      <Directory data={data} level={1} />
    </div>
  );
}
