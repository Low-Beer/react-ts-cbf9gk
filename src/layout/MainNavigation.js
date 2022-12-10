import React from "react";
import { NavLink } from 'react-router-dom'

// import classes from './MainNavigation.module.css'


const MainNavigation = () => {

    return (
        <header 
        // className={ classes.header}
        >
            <div 
            // className={ classes.logo}
            > Great Quotes</div>
            <nav 
            // className={ classes.nav}
            >
                <ul>
                    {/* <li><a></a></li>*/  /*NOTE: not optimal. triggers browser default of sending new request  */ }
                    <li><NavLink to='/quotes' 
                    // activeClassName={ classes.active } 
                    >My Quotes</NavLink></li>  {/* which also gets a CSS class if it is active */}
                    <li><NavLink to='/new-quotes' 
                    // activeClassName={ classes.active } 
                    >Add a Quotes</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}



export default MainNavigation