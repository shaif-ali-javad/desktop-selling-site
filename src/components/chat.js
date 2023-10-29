import { useState } from "react";
import "../styles/Chat.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";

export const Chat = () => {
  const [newMessage, setNewMessage] = useState();

  const messagesRef = collection(db, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    await addDoc(messagesRef);
  };

  return (
    <div className="chat-app">
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          type="text"
          className="new-message-input"
          placeholder="your message"
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
