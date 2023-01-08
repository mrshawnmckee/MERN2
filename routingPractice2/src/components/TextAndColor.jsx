import { useParams } from "react-router-dom";

const TextAndColor = (props)=> { 
    const { backColor } = useParams();      //This is going to change the background color, must use `${backcolor}`
    const { textColor } = useParams();      //This will change the text color
    const {wordVar}= useParams();           //This determines the word written on the screen
    return (
        <h1 style={{textAlign:"center", color:`${textColor}`, backgroundColor:`${backColor}`}}>The word is: {wordVar}</h1>
    );
} 

export default TextAndColor;