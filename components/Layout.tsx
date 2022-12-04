import Navbar from './Navbar'
import React from 'react'

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Navbar/>
            <div>{children}</div>
        </>
    )
}