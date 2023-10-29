import React, { useState, useRef } from "react";
import "./App.css";

import { Auth } from "./components/auth";
import { Chat } from "./components/chat";

import Cookies from "universal-cookie";
const cookies = new Cookies();

// import NavBar from "./components/navBar/navBar";

// services image parallax effect

// import TextBox from "./components/banner/textBox";
// import TextBox1 from "./components/banner/textBox1";
// import Services0 from "./components/banner/services0";
// import Services1 from "./components/banner/services1";

// contact - form;

// import Contact from "./components/contact/contact";

// firebase

// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

// services text parallax effect

// const textBox = TextBox();

// firebase

// firebase.initializeApp({
//   apiKey: "AIzaSyA1D5D-xLKYTLZQ44tBlyRNzgyFKOs80QA",
//   authDomain: "desktop-selling-site.firebaseapp.com",
//   projectId: "desktop-selling-site",
//   storageBucket: "desktop-selling-site.appspot.com",
//   messagingSenderId: "851328534923",
//   appId: "1:851328534923:web:d8cf8cec298c7d33f5878e",
//   measurementId: "G-1FXX9BEHYP",
// });

// const firestore = firebase.firestore();
// const auth = firebase.auth();
// const [user] = useAuthState(auth);
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <div>
        <h1>
          <Auth setIsAuth={setIsAuth} />
        </h1>
        {/* <TextBox1 /> */}
        {/* <NavBar />; */}
        {/* <Services0 />
      <TextBox />
      <Services1 />
      <TextBox />
      <Services1 />
      <Contact /> */}
        {/* <section>{user ? <ChatRoom /> : <SignIn />}</section> */}
      </div>
    );
  }
  return (
    <div>
      {room ? (
        <Chat />
      ) : (
        <div className="room">
          <label htmlFor="">Enter Room Name:</label>
          <input type="text" ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}
    </div>
  );
}

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };
//   return <button onClick={signInWithGoogle}>Sign in with google</button>;
// }

// function SignOut() {
//   return (
//     auth.currentUser && <button onClick={() => auth.SignOut()}>Sign Out</button>
//   );
// }

// function ChatRoom() {
//   const messagesRef = firestore.collection("message");
//   const query = messagesRef.orderBy("createdAt").limit(25);

//   const [messages] = useCollectionData(query, { idField: "id" });
//   const [formValue, setFormValue] = useState("");
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     const { uid, photoURL } = auth.currentUser;
//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL,
//     });
//     setFormValue("");
//   };
//   return (
//     <>
//       <div>
//         {messages &&
//           messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
//       </div>
//       <form onSubmit={sendMessage}>
//         <input
//           value={formValue}
//           onChange={(e) => setFormValue(e.target.value)}
//         />
//         <button type="submit">send</button>
//       </form>
//     </>
//   );
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;
//   const messageClass = uid === auth.currentUser.uid ? "send" : "received";
//   return (
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL} /> <p>{text}</p>
//     </div>
//   );
// }

export default App;
