import React from "react";

import classes from './Section.module.css'

export default function SectionHero(props) {
  return (
    <div className={ classes.secHero }>
      <div className={ classes.secHero_div }
        style={{ backgroundImage: props.backgroundImage }}
      >
        { props.overlayOpacity && <span className={ classes.overlay }/> }
      </div>
      <div className={ classes.div }>
          <div className={ classes.div_div_div }>
            <h1 className={ classes.h1 } >{ props.title }</h1>
            <p className={ classes.p }>
              { props.text }
            </p>
          </div>
      </div>
    </div>
  );
}
