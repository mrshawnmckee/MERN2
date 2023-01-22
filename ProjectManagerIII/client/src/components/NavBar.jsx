//rafce
import React from 'react'
import {link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{backgroundColor:"black", }}>
        <h1 style={{color:"white"}}>Product Title</h1>
        
        <NavLink style={{margin:"5px", color:"white"}} to="/form">Home</NavLink>
        <NavLink style={{margin:"5px", color:"white"}}to="/productList">Product List</NavLink>

        



    </div>
  )
}

export default NavBar