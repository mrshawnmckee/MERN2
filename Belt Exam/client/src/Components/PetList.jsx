import { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import  styles from'../App.css';

const PetList = (props) => {

    const [list, setList] = useState([])
    const navigate = useNavigate()
    useEffect( () => {
        axios.get('http://localhost:8000/api/pet')
        .then((res) => {
            console.log(res.data)
            setList(res.data)
        }).catch((err) => {
            console.log(err)
        })

    }, [])      //dependency array

const tableStyle = {
    border:'2px solid black',
    width:"50%"
}

    return (
    <div style={{marginLeft:"20px"}}>
        <a href='/pets/new' style={{float:"right", margin:"20px"}}>add a pet to the shelter</a>
        <h1>Pet Shelter</h1>
        <h2>These pets are looking for a good home</h2>
        <div >
            <table style={tableStyle}>

                <tr >
                    <th style={{width:"15%", textAlign:'left', borderRight:"solid black 2px"}}>Name</th>
                    <th style={{width:"15%", textAlign:'left', borderRight:"solid black 2px"}}>Type</th>
                    <th  style={{width:"15%", textAlign:'left'}}>Actions</th>
                </tr>

            {

                list.map((pet) => [
                    <tr>
                        <td style={{width:"15%", borderRight:"solid black 2px"}}>{pet.petName}</td>
                        <td style={{width:"15%", borderRight:"solid black 2px"}}>{pet.petType}</td>
                        <td style={{width:"15%"}}>
                            <Link to={`/pets/${pet._id}`}>{pet.petName} | </Link><Link to={`/pets/${pet._id}/edit`}>edit</Link>
                        </td>

                    </tr>


])
}
                    </table>
        </div>
        

    </div>
  )
}

export default PetList;