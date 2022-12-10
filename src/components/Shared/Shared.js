import React from "react";
import './Shared.css'

import classes from './Shared.module.css'

export default function SvgLine(props) {
  
    return (
        <svg
        className="svg-line" //{ classes.diagonal_svg }
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
        // style={{ }}
      >
        <polygon
          className={ classes.diag_svg }
          style={ props.style }
          points="2560 0 2560 103 0 103"
        ></polygon>
      </svg>
    );
};

export function DivDiagonalLine(props) {
    return (
    <div
        className={ classes.diagonal_svg_poli }
        style={{ height: "80px" }} >
        <SvgLine style={ props.style } />
    </div>
    );
};

export function PageWrapper(props) {

    return (              
        <section className={ classes.section }>
        <div className={ classes.section_wrapper }>
          <div>
            <h1 className={ classes.h1 }>{ props.title }</h1>
            <p className={ classes.p }>{ props.description }</p>
          </div>

          { props.children }

        </div>
      </section>
      )
}