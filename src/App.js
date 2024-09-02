
import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar1.js'
import { Home } from './components/Home.js';
import { About } from './components/About.js'
import NoteState from './context/notes/NoteState.js';
import Alert from './components/Alert.js'
import { Login } from './components/Login.js';
import { Signup } from './components/Signup.js';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  return (
    <>
      <NoteState showAlert={showAlert} >
        <Router>
          <Navbar showAlert={showAlert} />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/users" element={<Users />} /> */}
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route path="/signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
