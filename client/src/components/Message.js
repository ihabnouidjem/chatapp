import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/message.css";

function Message({ message, user, _id, deviceUser }) {
  return (
    <div>
      <p
        className={
          deviceUser == user
            ? "message-user user-message-container"
            : "message-user"
        }
      >
        {user}
      </p>
      <div
        className={
          deviceUser == user
            ? "message-container user-message-container"
            : "message-container"
        }
      >
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default Message;
