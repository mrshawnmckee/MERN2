import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect( () => {
    fetch("https://swapi.dev/api/people/1/")
    .then( (res) => {
      return res.json()
    }).then((result) => {
      console.log(result)
      setList(result)
    }).catch( (err) => {
      console.log(err)
    })
  },[])

  //unlike the other api, this one is only printing single items, so no .map needed
  // or new variables created; we canjust use list from above
  return (
    <div className="App">
      {

          <div>
            <h1>Name: {list.name}</h1>
            <h2>Height: {list.height} cm</h2>
          </div>

      }

    </div>
  );
}

export default App;
