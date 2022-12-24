import Navbar from './Navbar'
import React from 'react'
import Footer from "./Footer";
import LetItSnow from "./LetItSnow";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <LetItSnow />
            <Navbar/>
            <div>{children}</div>
            <Footer />
        </>
    )
}