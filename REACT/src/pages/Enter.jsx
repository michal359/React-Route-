import React from "react"
import { Link } from "react-router-dom"

export default function Enter() {
    return (
        <div className="enter-welcome-txt">
            <h1>FriendsHub - Your Social Hub for Connection and Organization!</h1>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h3>Welcome to FriendsHub, where seamless social interactions
                meet efficient task management! Our home page is a
                gateway to a world of features designed to enhance
                your digital social experience. Here's a sneak peek
                into what FriendsHub has to offer:</h3>
            <Link to='about'>Check out to read more about us</Link>
        </div>
    )
};