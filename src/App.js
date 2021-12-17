import { useState } from "react";
import "./App.css";
import Logo from "./assets/wobot-logo.png";
import BasicForm from "./components/BasicForm";
import Login from "./components/Login";

function App() {
  const [proceed, setProceed] = useState(false);
  return (
    <div className="mainBg flex items-center justify-center h-screen relative">
      <div className="absolute top-6 left-10">
        <img src={Logo} alt="Company Logo" />
      </div>

      {!proceed ? (
        <BasicForm proceedHandler={setProceed} />
      ) : (
        <Login proceedHandler={setProceed} />
      )}
    </div>
  );
}

export default App;
