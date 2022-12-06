import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar";
import Main from "./components/Main";
import Details from "./components/Details";
import About from "./components/About";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/details" element={<Details/>}/>
      <Route exact path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
