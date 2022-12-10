import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">
  {}
      <PersonCard fullName={"Doe, Jane"} age={"45"} hairColor={"Black"}/>
      <PersonCard fullName={"Smith, John"} age={"88"} hairColor={"Brown"} items={'5'}/>
      <PersonCard fullName={"Fillmore, Millard"} age={"50"} hairColor={"Brown"} items={'5'}/>
      <PersonCard fullName={"Smith, Maria"} age={"62"} hairColor={"Brown"} items={'5'}/>
    </div>
  );
}

export default App;
