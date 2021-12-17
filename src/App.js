import { useState } from "react";
import "./App.css";
import Logo from "./assets/wobot-logo.png";
import BasicForm from "./components/BasicForm";
import Login from "./components/Login";

function App() {
  const [proceed, setProceed] = useState(false);
  return (
    <div className="mainBg flex items-center justify-center min-h-screen relative bg-gray-50">
      <div className="hidden md:block absolute top-6 left-10">
        <a href="/">
          <img src={Logo} alt="Company Logo" />
        </a>
      </div>

      {!proceed ? <BasicForm proceedHandler={setProceed} /> : <Login />}
    </div>
  );
}

export default App;
