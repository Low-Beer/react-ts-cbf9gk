import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SvgIcon } from "./IconList";

import classes from './Shared.module.css'

export function SocialMediaList(props) {
  return (
    <div style={{ marginTop: "0.7rem", marginBottom: "1.7rem" }}>
      {props.social.map((item, index) => (
        <SocialMediaItem key={index} obj={item} />
      ))}
    </div>
  );
}

export default function SocialMediaList2(props) { 
  return (
      <ul className={ props.className.list }>
          { props.iconList.map( (item, index) => (
              <SocialLinksNavIcon key={index} icon_list={item} className={ props.className.navIcon }/>
              )
          )}
      </ul>
    );
};

export function SocialMediaItem(props) {
  const project = (icon) => {
    switch (icon) {
      case "facebook":
        return ( <FaFacebookF style={{ margin: "auto", backgroundColor: "rgba(37, 99, 235, 1)" }} /> );
      case "insta":
        return ( <FaInstagram style={{ margin: "auto", backgroundColor: "rgba(236, 72, 153, 1)" }} /> );
      case "linkedin":
        return ( <FaLinkedinIn style={{ margin: "auto", backgroundColor: "rgba(96, 165, 250, 1)" }} /> );
      case "tiktok":
        return ( <FaTiktok style={{ margin: "auto", backgroundColor: "rgba(39, 39, 42, 1)" }} /> );
      case "youtube":
        return ( <FaYoutube style={{ margin: "auto", backgroundColor: "rgba(255, 0, 0, 1)" }} /> );
      default:
        return <h1>No</h1>;
    }
  };

  return (
    <>{
        Object.entries(props.obj).map(([key, link]) => (
          <button
            className={`${ classes.sm_button } ${key}`}
            type="button"
            key={key}
            onClick={(e) => {
              e.preventDefault();
              // window.location.href= "link";
              window.open(link, "_blank");
            }}
          >
            {project(key)}
          </button>
        ))
    }</>
  );
}


function SocialLinksNavIcon(props) { // social
  const onClickHandler = (e) => {
      e.preventDefault();
      window.open(props.icon_list.link, "_blank");
  }
  
  return (
      <li className={ props.className.li }>
          <Link to='/' onClick= { onClickHandler } className={ (props.transparent ? "" : " ") + ' ' + props.className.a } >
              <SvgIcon icon={ props.icon_list.stl } fill={ 'white' }/>
              <span className={ props.className.span }> { props.icon_list.name } </span>
          </Link>
      </li>
  );
};