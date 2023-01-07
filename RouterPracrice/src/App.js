import React from 'react';
import './App.css';
import { BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"


function App() {
  return (
    <BrowserRouter> {/*  This wraps around all of the components to be aware of the current route*/}
      <h1>Routing Example</h1>    
      <Routes>
        <Route path="/about" element={<About />}/> {/*This lines up this component with the localhost:3000/about path */}
        <Route exact path="/" element={<Home />}/>  {/*This lines up root with the home component */}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
