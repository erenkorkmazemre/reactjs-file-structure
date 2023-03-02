import React from 'react'
import modules from './Navbar.module.scss'

function Navbar() {
    return (
        <>
            <div className={modules.container}>Navbar
                <button className={modules.button}>
                    Logout
                </button>
            </div>
        </>
    )
}

export default Navbar