import React from "react"
import { Outlet } from "react-router-dom"
import HomeHeader from "./HomeHeader"
import Footer from "./Footer"

export default function HomeLayout() {
    return (
        <div className="site-wrapper">
            <HomeHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
            
        </div>
    )
}