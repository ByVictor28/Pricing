import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./Navbar.module.css"

const Navbar = (props)=>{ 
return (
    <div className={classes.Navbar}>
        <Link to="/store">HOME</Link>
    </div>
) 
}

export default Navbar
