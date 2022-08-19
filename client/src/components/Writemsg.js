import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/Writemsg.css";
// import { GrSend } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

function Writemsg({ deviceUser }) {
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMsg("");
    axios
      .post("/api/messages", {
        message: msg,
        user: deviceUser,
      })
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  const handleChange = (event) => {
    setMsg(event.target.value);
  };

  return (
    <div>
      <form className="write-msg-container" /*onSubmit={handleSubmit}*/>
        <input
          type="text"
          value={msg}
          placeholder="write message "
          name="message"
          onChange={handleChange}
          className="msg-input"
        />
        <button type="button" onClick={handleSubmit} className="send-icon">
          <FiSend className="icon" />
        </button>
      </form>
    </div>
  );
}

export default Writemsg;
