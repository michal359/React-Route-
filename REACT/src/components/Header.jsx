import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            {/* <Link className="site-logo" to="/">#FriendsHub</Link> */}
            <nav className="loginAndRegisterNavBar">

                <NavLink 
                    to="/login"
                    end
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Login
                </NavLink>
                <NavLink 
                    to="/register"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Register
                </NavLink>
               
            </nav>
        </header>
    )
}