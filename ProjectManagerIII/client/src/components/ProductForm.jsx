import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [ title, setTitle ] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {           //route from routes/product.route   
            title, 
            price, 
            description
        })

        .then((res)=>{          //needed because this is an asynchronous function
            console.log(res);
            console.log(res.data);
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch(err=>{
            console.log(err)
    })
}
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                        onChange = {(e)=>setTitle(e.target.value)} 
                    />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                        onChange = {(e)=>setPrice(e.target.value)} 
                    />

                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                        onChange={(e)=>setDescription(e.target.value)} 
                    />
                </p>
                <input type="submit" value="Create"/>
            </form>

        </div>
    )
}
export default ProductForm;