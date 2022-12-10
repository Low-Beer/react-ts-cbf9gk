import React from "react";
import { PrepPhaseList } from "../Cards/CardSm";
import { DivDiagonalLine } from "../Shared/Shared";

import classes from './Section.module.css'

export default function SectionOurValues(props) {

  return (              
    <section className={ classes.ourValues }>
        <DivDiagonalLine />
        {/* <DivDiagonalLine style={ {color: 'rgb(24, 24, 27)', fill: 'currentColor' }} /> */}
       
        <h2 style={ {color: 'white', paddingTop: '4rem'}}>
            { props.ourValuesList.head }
        </h2>
            { 
                props.ourValuesList.text.split('\n').map((str, index) => 
                    <p key={index} style={ {color: 'white', textAlign: 'center'} }>{str}</p>) 
            }

        <PrepPhaseList ourValuesList={props.ourValuesList}/>

    </section>
)
}
