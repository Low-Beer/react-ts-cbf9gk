import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";


import SocialMediaList2 from "../components/Shared/SocialMediaList";

import DATA from "../DATA.js";

// import './Navbar.css'
import classes from './Navbar.module.css';
import { SvgIcon } from "../components/Shared/IconList";


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const sectionList = DATA.navBarList;  // 'Home' is out of the page.
  const iconList = DATA.socialLinks;

  const clickNavItem = (str) => {
    str = str || 'home';
    props.onPageHandler(str);
    setNavbarOpen(false);
  }

  const onHomeClick = (e) => {
    e.preventDefault();
    if (navbarOpen) {
      setNavbarOpen(false);
    }
  }


  return (
    <nav className={ classes.nav } onClick={ (e) =>  onHomeClick(e) }>
      <div className={ classes.nav_wrapper }>
        <div className={ classes.nav_main }>
            <NavLink to={ "/home" }   
              style={ { color: "white", top: "-94px", zIndex: "500" } }
              className={ classes.home_link } 
            >  
              {/* Home  */}
              <SvgIcon icon={ 'own_fsw_logo' } stl={ {stroke:'#FFFFFF'} } />
            </NavLink>
          <button
            className={ classes.nav_toggle } 
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            >         
              <FaBars style={ {color: 'white'} } />
          </button>
        </div>
        
        <div
          className={ classes.nav_menu + (navbarOpen ? '' : ' ' + classes.is_deactivated) }
            onClick={ (e) =>  onHomeClick(e) }
        > 
          <div className={ classes.center_wrapper }>
            <NavbarList sectionList={sectionList} onPage={ clickNavItem }/>
          </div>
          <div className={ classes.right_wrapper }>
            <SocialMediaList2 iconList={iconList} className={ 
                { list : classes.list,
                  navIcon : {li: '', span: classes.sl_span, a: classes.li_item_a }
                } 
            }/>
            <NavbarBtn label='Register Now' link= 'https://tickets.tuvens.com/e/15/forro-sailing-week-2023' />
          </div>
        </div>
    </div>
  </nav>
  );
}

function NavbarBtn(props) {
  return (
    <button
      className={ classes.btn }
      type="button"
      style={{ transition: "all .15s ease" }}

      onClick={(e) => {
        e.preventDefault();
        // window.location.href= "link";
        window.open(props.link, "_blank");
      }}   
    >
      { props.label }
    </button> 
    );
}


export function NavbarList(props) {
  return (
      <ul className={ classes.list }>
        { 
          props.sectionList.map( (item, index) => (
            <li className={ classes.li_item } key = {index}>
              <NavLink 
                to={ item.toLowerCase() } 
                className={ ({ isActive }) => (
                  isActive ? classes.li_item_a + ' ' + classes.active 
                  : classes.li_item_a )} // className={(state) => console.log(state)}
                // TODO: implement this more elegant approach:
                // https://stackoverflow.com/questions/70005101/why-activeclassname-property-in-navlink-is-not-working-in-6-0-2-version-of-react
              > 
                {item} 
              </NavLink>
            </li>))
        }
      </ul>
    );
};