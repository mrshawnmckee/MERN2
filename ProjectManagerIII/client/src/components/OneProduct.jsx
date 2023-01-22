//The purpose of this component is to open a new page
//that returns information just about that particular product
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams, Link, useNavigate} from 'react-router-dom'; //this is for use by the link


const OneProduct = (props) => {

    //this is to destructure id out of use params for use by the link to get one
    
    
    const {id} = useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)    //link to get one
        .then((res)=>{
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })

    },[])

    const deleteHandler = () =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res)
            navigate('/productlist')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
    <div>
        <h2>{product.title}</h2>
        <h3>Price: {product.price}</h3>
        <h3>Descripption: {product.description}</h3>
        <Link to={`/editproduct/${product._id}`}>Edit Product</Link>
        <button 
            style={{backgroundColor:"blue", 
            color:'white', 
            margin:"5px"}}
            onClick={deleteHandler}>Delete Product</button>
    </div>
    )
}

export default OneProduct