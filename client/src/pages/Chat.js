import React, { useState, useEffect } from "react";
import axios from "axios";
import Message from "../components/Message";
import "../styles/chat.css";
import Writemsg from "../components/Writemsg";

function Chat({ username, loginStatus }) {
  const [messages, setMessages] = useState([]);
  const [deviceUser, setDeviceUser] = useState();
  useEffect(() => {
    axios
      .get("/api/messages")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((err) => console.log(err));
  });
  useEffect(() => {
    setDeviceUser(username);
  }, [loginStatus]);
  console.log(deviceUser);
  return (
    <main className="main-chat">
      <div>
        {messages.map(({ message, user, _id }) => {
          return (
            <div key={_id}>
              <Message message={message} user={user} deviceUser={deviceUser} />
            </div>
          );
        })}
      </div>
      <div>
        <Writemsg deviceUser={deviceUser} />
      </div>
    </main>
  );
}

export default Chat;
