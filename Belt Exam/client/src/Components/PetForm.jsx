import {useState, useEffect} from 'react';
import axios from 'axios';


const PetForm = (props) => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("")

    //validation
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/pet", {
                petName,
                petType,
                petDescription, 
                skillOne,
                skillTwo,
                skillThree
            })
            .then((res) => {
                console.log(res.data)
                setPetName("")
                setPetType("")
                setPetDescription("")
            })
            .catch((err)=> {
                console.log(err)
                console.log("Validation Error from the back end")
                setErrors(err.repsonse.data.errors)
        })
    }


    const formStyle = {
        textAlign:"center",
        margin:'10px',
        border:"solid"
    }

  return (
    <div style={{margin:'0 30px 0 30px '}}>
        <a href='/' style={{float:"right", margin:"20px"}}>back to home</a>
        <h1>Pet Shelter</h1>
        <h2>Know a pet needing a home?</h2>
        <div  style={formStyle}>
            <form onSubmit={onSubmitHandler} >
                <div style={{display:"flex", flexDirection:"row"}}>

                    <div style={{display:"flex", width:"50%", textAlign:'left', flex:"1"}}>
                        <div style={{flexDirection:"column"}}>

                            <div style={{margin: "10px"}}>
                                <label style={{textAlign:"right"}}>Pet Name:</label><br />
                                <input 
                                    type="text" 
                                    onChange={(e) => setPetName(e.target.value)}
                                    //value={petName}
                                />
                                {errors.petName && <span>{errors.petName.message}</span>}
                            </div>

                            <div style={{margin: "10px"}}>
                                <label htmlFor="">Pet Type:</label><br />
                                <input type="text" 
                                onChange={(e)=>setPetType(e.target.value)}
                                //value={petType}
                            />
                                {errors.petType ? <span>{errors.petType.message}</span> : null}
                            </div>

                            <div style={{margin: "10px"}}>
                                <label htmlFor="">Pet Description:</label><br />
                                <input 
                                type="text" 
                                onChange={(e) => setPetDescription(e.target.value)}
                                //value={petDescription}
                            />
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
                                />
                            </div>
                            <div>
                                <label htmlFor="">Skill 2:</label><br />
                                <input type="text" 
                                    onChange={(e) => setSkillTwo(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Skill 3:</label><br />
                                <input type="text" 
                                onChange={(e) => setSkillThree(e.target.value)}                        
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{textAlign:"left"}}>

                    <button type="submit" style={{color:"white", backgroundColor:"blue", 
                        boxShadow:"2px 2px black", margin:"10px", width:"10%", position:"left"}}>Add Pet</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default PetForm