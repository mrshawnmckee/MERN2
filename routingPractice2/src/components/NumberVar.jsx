import { useParams } from "react-router-dom";
import WordVar from "./WordVar";

const NumberVar = (props) => {
    const { numVar } = useParams();
    

    return(
        <h1 style ={{textAlign:"center"}}>The number is: {numVar}</h1>    
    );
}

export default NumberVar;






