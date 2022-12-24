import Navbar from './Navbar'
import React from 'react'
import Footer from "./Footer";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Navbar/>
            <div>{children}</div>
            <Footer />
        </>
    )
}