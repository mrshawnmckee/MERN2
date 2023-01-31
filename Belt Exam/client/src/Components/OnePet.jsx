import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams, Link, useNavigate} from 'react-router-dom'



const OnePet = (props) => {

    //this is to destructure id out of use params for use by the link to get one
    
    
    const {id} = useParams();
    const navigate = useNavigate()
    const [pet, setPet] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${id}`)    //link to get one
        .then((res)=>{
            setPet(res.data)
        }).catch((err)=>{
            console.log(err)
        })

    },[])

    const deleteHandler = () =>{
        axios.delete(`http://localhost:8000/api/pet/${id}`)
        .then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }


    return (
    <div>
        <div>
        <a href='/' style={{float:"right", margin:"10px 30px 10px 30px"}}>back to home</a><br /><br />

        <button 
            style={{backgroundColor:"red", 
            color:'white',
            fontWeight:"900", 
            margin:"30px",
            float:"right",
            width: "8%",
            height: "30px",
            boxShadow:"2px 2px black"
        }}
            onClick={deleteHandler}>Adopt {pet.petName}</button>
        </div>
        <div style={{margin:'30px'}}>

            <h1>Pet Shelter</h1>
            <h2>Details about: {pet.petName}</h2>
        </div>

        <div style={{border:"solid", margin:"30px", padding:"10px"}}>
                
                <h3>Pet Type: <span style={{marginLeft:"50px"}}>{pet.petType}</span></h3>
                <h3>Description: <span style={{marginLeft:"24px"}}>{pet.petDescription}</span></h3>

                <div style={{display:"flex"}}>

                <h3>Skills: </h3>
                    <div style={{flexDirection:"column", marginLeft:"85px"}}>
                        <p>{pet.skillOne}</p>
                        <p>{pet.skillTwo}</p>
                        <p>{pet.skillThree}</p>

                    </div>

            </div>

            <div>
                <button style={{color:"white", backgroundColor:"green", boxShadow:"2px 2px black", marginLeft:"50px", width:"15%"}}>Like {pet.petName}</button>
            </div>
        </div>

    </div>

    )
}

export default OnePet