import React from "react";
import MainNavigation from './MainNavigation'
// import classes from './Layout.module.css'
import Footer from './Footer'
import Navbar from './Navbar'


const Layout = (props) => {

    return (
        <>
        {/* <MainNavigation></MainNavigation> */}
        <Navbar transparent />
        <main 
            // className={classes.main}
            >
            { props.children }
        </main>
        <Footer />
        </>
    )
}

export default Layout