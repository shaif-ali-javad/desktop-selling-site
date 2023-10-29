import React, { useState, useRef } from "react";
import "./App.css";

import { Auth } from "./components/auth";
import { Chat } from "./components/chat";

import Cookies from "universal-cookie";

import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

const cookies = new Cookies();

// import NavBar from "./components/navBar/navBar";

// services image parallax effect

// import TextBox from "./components/banner/textBox";
// import TextBox1 from "./components/banner/textBox1";
// import Services0 from "./components/banner/services0";
// import Services1 from "./components/banner/services1";

// contact - form;

// import Contact from "./components/contact/contact";

// services text parallax effect

// const textBox = TextBox();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div>
        <h1>
          <Auth setIsAuth={setIsAuth} />
        </h1>
      </div>
    );
  }
  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <label htmlFor="">Enter Room Name:</label>
          <input type="text" ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}
      <div className="sign-out">
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </>
  );
}

export default App;
