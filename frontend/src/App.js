import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";
function App() {
  const [response, setResponse] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(ENDPOINT)
    socketRef.current.on("connection", (users) => {
      console.log(users)
    })
    return () => {
      socketRef.current.disconnect();
    }
  }, []);


  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
