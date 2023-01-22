// This component is for showing the data on the screen

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'; //this is for the header in the map, so we can click it and navigate to page

const ProductList = () => {
    
    const [list, setList] = useState([])       //This is for the data from the get request. it is an array so thaat we can map it

    useEffect(()=>{                     //Will cause it to happen uponload or update


        axios.get('http://localhost:8000/api/products')
        .then((res)=>{
            console.log(res)
            setList(res.data)                       //Sets list to the data requested from the database
        }).catch((err)=>{
            console.log(err)
        })

    }, []) //without dependency array, useEffect runs constantly, so will need to stop it


    return (
        //we need to show the info on screen, so we will map. Map has to be used on arrays
        //on the map, we will not use curlys so that we dont have to set a return
    <div>
        <h1>All Products</h1>
        {
            list.map((product)=>(
                <div>
                    {/* turning the title into a lnk for oneProduct component */}
                    <Link to={`/oneproduct/${product._id}`}>{product.title}</Link>
                    {/* //if using an image <img src={yourimage.whereitis} */}
                </div>
            ))
        }

    </div>
    )
}

export default ProductList