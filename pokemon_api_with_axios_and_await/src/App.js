import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [pokeList, setPokeList] = useState([]);

//With axios, we dont use fetch, we use axios.%HTTPVerb% (in this case get)
// and we dont need to convert the return data to json, axios does it for us

//also, here i used await instead of use effect, and used a button to start the rendering

//  useEffect ( () => {
    const apiCall= async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
        setPokeList(res.data.results)
      } catch(error){
        console.log(error)
      }
    }
    // axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
    // .then ( (res) => {
    //   console.log(res)
    //   setPokeList(res.data.results)     //also, the subfield is changed, so now we must add .data. to the path
    // }).catch ((err)=> {
    //   console.log(err)
    // })

//  },[])

  return (
    <div className="App">
      <button onClick={apiCall}>apiCall</button>
      
      {
        pokeList.map((pokemon) => (
          <div>
            <h1>{pokemon.name}</h1>
          </div>
        ))
      }

    </div>
  );
}

export default App;
