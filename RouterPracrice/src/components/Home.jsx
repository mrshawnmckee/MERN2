//This is the Home component to show up when the URL is localhost:3000 //
import { Link } from "react-router-dom";


const Home = (props) => {
    return (
        <>
        
            <h1 style={{color: "red"}}>Home Component</h1>
            <Link to="/about">About</Link>      {/*Link to instead of a href="" */}
        </>

    );
}

export default Home;