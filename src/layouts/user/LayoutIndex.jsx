import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const LayoutIndex = () => {
    return (
        <>
            <Header />
            <Outlet></Outlet>
        </>
    )
}

export default LayoutIndex