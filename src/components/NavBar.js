import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"



class NavBar extends Component{


    render(){
        return(
            
        <nav class="navbar navbar-expand bg-dark fixed-top">      
        <div style={{display:"flex",padding:'0.5rem',color:"blue"}}>
            <Link to="/" style={{textDecoration:"none"}} ><h1>Movies App</h1></Link>
            <Link to="/favourites" style={{textDecoration:"none"}}><h2 style={{marginLeft:"2rem",marginTop:"0.5rem"}}>Favourites</h2></Link>
        </div></nav>
        )
    }
}

export default NavBar