import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import OnePet from './Components/OnePet';
import PetForm from './Components/PetForm';
import PetList from './Components/PetList';
import UpdatePet from './Components/UpdatePet';


function App() {
  return (

    <div >

      <BrowserRouter>


        <Routes>

          <Route path="/" element={<PetList />}/>
          <Route path="/pets/new" element={<PetForm />}/>
          <Route path="/pets/:id/edit/" element={<UpdatePet />}/>
          <Route path="/pets/:id" element={<OnePet />} />

        </Routes> 
      
      </BrowserRouter>

    </div>

  );
}

export default App;
