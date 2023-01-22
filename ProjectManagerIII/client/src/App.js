import React from 'react';
import ProductForm from './components/ProductForm'
import './App.css';
import ProductList from './components/ProductList';
import {BrowserRouter, Routes, Route} from 'react-router-dom'  //This is for linking in between pages
import NavBar from './components/NavBar';                       //For the links
import OneProduct from './components/OneProduct';
import FormUpdate from './components/FormUpdate'


function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/form' element={<ProductForm/>}/>    
            <Route path='/productlist' element={<ProductList/>}/>
            <Route path='/oneproduct/:id' element={<OneProduct/>}  />
            <Route path='/editproduct/:id' element={<FormUpdate/>}  />
          </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
