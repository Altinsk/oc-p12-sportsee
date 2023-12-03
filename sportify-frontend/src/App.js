import Header from "../src/components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      
      <main style={{ display: "flex" }}>
        <Sidebar />

      </main>
    </div>
  );
}

export default App;
