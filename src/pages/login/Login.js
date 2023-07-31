import React from 'react'
import Navbar from "@components/navbar";
import LeftSideBar from "@components/leftSideBar";
import LoginForm from "@pages/login/loginForm";

function Login() {
    return (
        <>
            <Navbar/>
            {/* <LeftSideBar/> */}
            <LoginForm/>
        </>
    )
}

export default Login