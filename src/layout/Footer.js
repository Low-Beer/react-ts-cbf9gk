import React from "react";
import { DivDiagonalLine } from "../components/Shared/Shared";

import classes from './Footer.module.css'
import DATA from "../DATA.js";
import { SvgIcon } from "../components/Shared/IconList";


export default function Footer() {
  const {socialLinks, otherLinks } = DATA;

  return (
    <>
    <footer className={ classes.footer }>
        <DivDiagonalLine />
        <div className= { classes.wrapper }>

            <SocialLinksFooter sl={ socialLinks } className={ classes.social } />

            <FooterOtherResourcesList 
                lstTitles= { Object.keys(otherLinks)[0] }
                lstItems= {  otherLinks["Useful Links"] } />

            <FooterOtherResourcesList 
                lstTitles= { Object.keys(otherLinks)[1] }
                lstItems= {  otherLinks["Other Resources"] } />
        </div>
        <div className={ classes.bottom }>
            {/* <hr className=""/> */}
            <div className={ classes.copyright }>
              Copyright © {new Date().getFullYear()}{" "}FSW GbR.{" "}
            </div>
        </div>
    </footer>
    </>
  );
}


export function FooterOtherResourcesList(props) {
  return (
      <div className={ classes.list }>
          <h3 className={ classes.title }>
              { props.lstTitles}
          </h3>
          <ul>
          { 
              props.lstItems.map( (item, index) => (
                  <li key={ index }>
                      <a href={ item.link }> 
                          {item.name}
                      </a>
                  </li>
              )) 
          }
          </ul>
      </div>
  )
}

export function SocialLinksFooter(props) {
  return (
      <div className={ classes.social}>
        <ContactFooter></ContactFooter>
          {/* <h3> Let's keep in touch! </h3> */}
          {/* <p> Find us on any of these platforms. </p> */}
          { 
              props.sl.map( (item, index) => (
                  <button key= { index }
                      className={ `${ classes.socialIcon } ${""}`}
                      style={ { color: item.color } }
                      type="button"
                  >
                    <SvgIcon icon={ item.stl } fill={ item.color } />  
                  </button>
              )) 
          }
      </div>
  );
}

export function ContactFooter(props) {
    return (
        <>
            <div className={ classes.contact_inner_wrapper }>
                <div className={ classes.item }>Forró Sailing Week (FSW)</div>

                <div className={ classes.item }>
                    <span>PHONE</span> <a href="tel:+30 6945574463">+49 17617471049</a>
                </div>

                <div className={ classes.item }>
                    <span>EMAIL</span>
                    <a href="mailto:info@fsw.com"><span></span></a>info@fsw.com
                </div>
            </div>
        </>
    );
}
