import React from "react"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <div className="about-page-content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="link-button" to="/vans">Explore our vans</Link>
            </div>
        </div>
    );
}

{/* <p>Welcome to FriendsHub, where seamless social interactions
                meet efficient task management! Our home page is a
                gateway to a world of features designed to enhance
                your digital social experience. Here's a sneak peek
                into what FriendsHub has to offer:</p>
            <h2>🌟 Personalized Dashboard</h2>
            <p>Upon logging in, your personalized dashboard awaits!
                Stay updated with real-time feeds from friends,
                recent activities, and tailored recommendations
                based on your preferences. Seamlessly connect with friends,
                manage tasks, share captivating posts, and preserve cherished
                memories through albums, all in one vibrant social platform.</p>
            <h2>🌈 Join FriendsHub Today!</h2>
            <p>Subscribe to FriendsHub now and unlock a world where social connections
                and task management seamlessly come together. Experience the joy of
                staying connected, organized, and engaged in a community that celebrates
                every moment.</p> */}