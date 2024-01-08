import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function HomeHeader() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
               
               <Link className="site-logo" to="/home">#FriendsHub</Link>
         <h4 className="Hii-user">Hii user</h4>
            <nav className="loginAndRegisterNavBar">
                <NavLink 
                    to="/home/info"
                    end
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Info
                </NavLink>
                <NavLink 
                    to="/home/todos"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Todos
                </NavLink>
                <NavLink 
                    to="/home/posts"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Posts
                </NavLink>
              
                <NavLink 
                    to="/home/albums"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Albums
                </NavLink>
                <NavLink 
                    to="/home/logout"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Logout
                </NavLink>
                
            </nav>
        </header>
    )
}