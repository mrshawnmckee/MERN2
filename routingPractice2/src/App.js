import {
  BrowserRouter,
  Routes,
  useParams,
  Route,
} from "react-router-dom"
import Home from "./components/Home";
import NumberVar from "./components/NumberVar";
import WordVar from "./components/WordVar";
import './App.css';
import TextAndColor from "./components/TextAndColor";



function App() {
  const { wordVar } = useParams();
  return (
    <BrowserRouter>

      <Routes>

        <Route exact path="/home" element={<Home />} />
        {/* <Route path="/:numVar" element={isNaN(45) ? (<WordVar />) : (<NumberVar />)} /> */}
        <Route path="/:numVar" element={<NumberVar />}/>
        <Route path="/:wordVar" element={<WordVar />} />
        <Route path="/:wordVar/:textColor/:backColor" element={<TextAndColor />} />
        
      </Routes> 
    </BrowserRouter> 
  );
}

export default App;
