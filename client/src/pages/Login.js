import React, { useState, useEffect } from "react";
import "../styles/login.css";

function Login({ setLoginStatus, setUserName }) {
  const [key, setKey] = useState();

  const submitLogin = (event) => {
    if (key == "ihab") {
      setKey("");
      event.preventDefault();
      setLoginStatus(true);
    } else {
      alert("wrong key");
      setKey("");
      setUserName("");
    }
  };
  const userChange = (event) => {
    setUserName(event.target.value);
  };
  const keyChange = (event) => {
    setKey(event.target.value);
  };
  return (
    <form className="login-container" onSubmit={submitLogin}>
      <label className="login-username">username</label>
      <input
        className="login-username-input"
        type="text"
        name="user"
        placeholder="username"
        onChange={userChange}
      />
      <label className="login-key">key</label>
      <input
        className="login-key-input"
        type="text"
        name="key"
        placeholder="key"
        onChange={keyChange}
      />
      <button className="login-submit" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
