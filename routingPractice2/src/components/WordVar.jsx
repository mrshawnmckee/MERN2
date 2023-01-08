import { useParams } from "react-router-dom";

const WordVar = (props) => {
    const {wordVar}= useParams();
    return (
        <h1 style={{textAlign:"center"}}>The word is: {wordVar}</h1>
    )
}

export default WordVar;