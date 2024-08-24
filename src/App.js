
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar1.js'
import { Home } from './components/Home.js';
import { About } from './components/About.js'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/users" element={<Users />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
