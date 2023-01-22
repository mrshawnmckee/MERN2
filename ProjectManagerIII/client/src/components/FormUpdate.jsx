import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const FormUpdate = (props) => {
  const [ title, setTitle ] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [product, setProduct] = useState({})

  const {id} = useParams()      //destructuring id out of useParams

  //This is so that the page will navigate back after the form is updated
  const navigate = useNavigate()      

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)    //link to get one
        .then((res)=>{
            setTitle(res.data.title)    //This will populate the form to be edited with
            setPrice(res.data.price)    //The info that is stored in state
            setDescription(res.data.description)
        }).catch((err)=>{
            console.log(err)
        })
  },[])

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/${id}`, {
      title,        //we must put this body info in or the DB will not be updated
      price, 
      description
    })
    .then((res) =>{
      console.log(res)
      navigate('/productlist')
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
        <h1>Update Product</h1>
            <form >
                <p>
                    <label>Title</label><br />
                    <input type="text"
                    value={title} 
                        onChange = {(e)=>setTitle(e.target.value)} 
                    />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    value={price}
                        onChange = {(e)=>setPrice(e.target.value)} 
                    />

                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    value={description}
                        onChange={(e)=>setDescription(e.target.value)} 
                    />
                </p>
                {/* <input type="submit" value="Update"/> */}
                <button onClick={onSubmitHandler}>Update</button>
            </form>
    </div>
  )
}

export default FormUpdate