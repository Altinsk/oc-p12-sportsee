import Header from "../src/components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />

      <main style={{ display: "flex" }}>
        <Sidebar />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
