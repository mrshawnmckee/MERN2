import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">

      <PersonCard 
        fullName={"Doe, Jane"} 
        age={45} 
        hairColor={"Black"} 
        name={"Jane Doe"}
        />
      <PersonCard 
        fullName={"Smith, John"} 
        age={88} 
        hairColor={"Brown"} 
        name={"John Smith"}
        />
      <PersonCard 
        fullName={"Fillmore, Millard"} 
        age={50} 
        hairColor={"Brown"} 
        name={"Millard Fillmore"}
        />
      <PersonCard 
        fullName={"Smith, Maria"} 
        age={62} 
        hairColor={"Brown"} 
        name={"Maria Smith"}
        />
    </div>
  );
}

export default App;
