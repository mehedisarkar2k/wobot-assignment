import { useState } from "react";
import "./App.css";
import Logo from "./assets/wobot-logo.png";
import BasicForm from "./components/BasicForm";
import Login from "./components/Login";

function App() {
  const [proceed, setProceed] = useState(false);
  return (
    <div className="mainBg flex items-center justify-center min-h-screen relative">
      <div className="hidden md:block absolute top-6 left-10">
        <img src={Logo} alt="Company Logo" />
      </div>

      {!proceed ? <BasicForm proceedHandler={setProceed} /> : <Login />}
    </div>
  );
}

export default App;
