
import { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import PetForm from './PetForm';
import axios from 'axios'

const UpdatePet = (props) => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [skillOne, setSkillOne] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  const [skillThree, setSkillThree] = useState("")

  const [errors, setErrors] = useState({})

  const [pet, setPet] = useState({})


  const {id} = useParams()      //destructuring id out of useParams

  //This is so that the page will navigate back after the form is updated
  const navigate = useNavigate()      

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/pet/${id}`)    //link to get one
        .then((res)=>{
            setPetName(res.data.petName)    //This will populate the form to be edited with
            setPetType(res.data.petType)    //The info that is stored in state
            setPetDescription(res.data.petDescription)
            setSkillOne(res.data.skillOne)
            setSkillTwo(res.data.skillTwo)
            setSkillThree(res.data.skillThree)
        }).catch((err)=>{
            console.log(err)
        })
  },[])

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/pet/${id}`, {
      petName,        //we must put this body info in or the DB will not be updated
      petType, 
      petDescription, 
      skillOne,
      skillTwo,
      skillThree
    })
    .then((res) =>{
      console.log(res)
      navigate('/')
    }).catch((err)=>{
      console.log(err)
      setErrors(err.response.data.errors) //More for the validation errors
    })
  }
    
  const formStyle = {
    textAlign:"center",
    margin: '10px',
    border:"solid"
}

  return (
    <div>
      <a href='/' style={{float:"right", margin:"20px"}}>back to home</a>
      <h1>Pet Shelter</h1>
      <h2>Edit {petName}</h2>
      <div  style={formStyle}>
            <form onSubmit={onSubmitHandler}>
                <div style={{display:"flex", flexDirection:"row"}}>

                    <div style={{display:"flex", width:"50%", textAlign:'left', flex:"1"}}>
                        <div style={{flexDirection:"column"}}>

                            <div style={{margin: "10px"}}>
                                <label style={{textAlign:"right"}}>Pet Name:</label><br />
                                <input 
                                    type="text" 
                                    onChange={(e) => setPetName(e.target.value)}
                                    value={petName}
                                /><br/>
                                {errors.petName && <span>{errors.petName.message}</span>}
                            </div>

                            <div style={{margin: "10px"}}>
                                <label htmlFor="">Pet Type:</label><br />
                                <input type="text" 
                                onChange={(e)=>setPetType(e.target.value)}
                                value={petType}
                            /><br/>
                                {errors.petType ? <span>{errors.petType.message}</span> : null}
                            </div>

                            <div style={{margin: "10px"}}>
                                <label htmlFor="">Pet Description:</label><br />
                                <input 
                                type="text" 
                                onChange={(e) => setPetDescription(e.target.value)}
                                value={petDescription}
                            /><br/>
                            {errors.petDescription ? <p>{errors.petDescription.message}</p> : null}
                            </div>
                        </div>


                        <div style={{display:"flex", width:"50%", justifyContent:'right'}}>
                            <div style={{flexDirection:"column"}}>

                            <div>
                                <h3>Skills (optional):</h3>
                                <label htmlFor="">Skill 1:</label><br />
                                <input type="text" 
                                onChange={(e) => setSkillOne(e.target.value)}
                                value={skillOne}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Skill 2:</label><br />
                                <input type="text" 
                                    onChange={(e) => setSkillTwo(e.target.value)}
                                    value={skillTwo}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Skill 3:</label><br />
                                <input type="text" 
                                onChange={(e) => setSkillThree(e.target.value)}   
                                value={skillThree}                     
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{textAlign:"left"}}>

                    <button type="submit" style={{color:"white", backgroundColor:"blue", 
                        boxShadow:"2px 2px black", margin:"10px", width:"10%", position:"left"}}>Edit Pet</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default UpdatePet;