import { useEffect, useState } from "react";
import "../styles/Chat.css";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  serverTimestamp,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";

export const Chat = (props) => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState();
  const [messages, setMessage] = useState([]);
  // const [products, setProducts] = useState();

  const messagesRef = collection(db, "messages");
  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessage(messages);
    });
    return () => unsuscribe();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setNewMessage("");
  };
  useEffect(() => {
    (async () => {
      const colRef = collection(db, "messages");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setMessage(docs);
      console.log(docs);
    })();
  }, []);
  return (
    <div className="chat-app">
      <div className="header">
        <h1>you can ask here {room}</h1>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <div className="messages" key={message.id}>
            <div className="user-message">
              <span className="user"> {message.user}</span>
              <br />
              {message.text}
              {/* <br />
              {message} */}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          type="text"
          className="new-message-input"
          placeholder="your message"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
      {/* <div className="messages">
        {messages.map((message) => (
          <div className="messages" key={message.user}>
            <div className="user-message">
              <span className="user"> {message.user}</span>
              <br />
              {message.text}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
