import Header from "../src/components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

function App() {
  return (
    <div className="App">
      <Header />

      <main style={{ display: "flex" }}>
        <Drawer />

      </main>
    </div>
  );
}

export default App;
