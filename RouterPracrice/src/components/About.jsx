//This is the component that will show up when the URL is localhost:3000/About //
import { Link } from "react-router-dom";

const About = (props) => {
    return (
        <>
            <h1 style={{color: "blue"}}>About component</h1>
            <Link to="/">Back to home</Link>        {/*If this was done with an a href="" tag, when you go from  */}
                                                    {/*Link to link the state would be refreshed; not good for SPA */}
        
        </>
    )
}

export default About;