

import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            firstName: firstName, 
            lastName: lastName,
            email: email, 
            password: password,
            confirmPassword: confirmPassword
        };
        alert("First Name: " + firstName);
    }; 
    
    return(
        <div>

            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <input type="submit" value="Your Form Data" />
            </form>
            <p>First Name {firstName}</p>
            <p>Last Name {lastName}</p>
            <p>Email {email}</p>
            <p>Password {password}</p>
            <p>Confirm Password {confirmPassword}</p>
        </div>
    );
};
    
export default Form;
