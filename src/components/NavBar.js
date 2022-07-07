import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


class NavBar extends Component{
    


    render(){
        return(
        <nav className="bg-dark fixed-top"> 
          
            <div style={{display:"flex",padding:'0.7rem'}}>
                <Link to="/" style={{textDecoration:"none"}} >
                    <h1 className="page-logo">MovieWorld</h1>
                </Link>
                <Link className="navbar-text" to="/" style={{textDecoration:"none"}}>
                    <h2 className="page-title">
                        <i className="fa fa-home" style={{paddingRight:".2rem"}}></i>
                        Home
                    </h2>
                </Link>
                <Link className="navbar-text" to="/favourites" style={{textDecoration:"none"}}>
                    <h2 className="page-title">
                        <i className="fa fa-heart" style={{paddingRight:".2rem"}}></i>
                        Favourites
                    </h2>
                </Link>
            </div>
        </nav>
        )
    }
}

export default NavBar