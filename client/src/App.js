import { Navbar, Welcome, Services, Footer, Transactions } from "./components";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
