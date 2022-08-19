import "./App.css";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import react, { useState, useEffect } from "react";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [username, setUserName] = useState();

  return (
    <div>
      <div className={loginStatus ? "hidden" : "main"}>
        <Login setLoginStatus={setLoginStatus} setUserName={setUserName} />
      </div>
      <div className={!loginStatus ? "hidden" : "main"}>
        <Chat username={username} loginStatus={loginStatus} />
      </div>
    </div>
  );
}

export default App;
