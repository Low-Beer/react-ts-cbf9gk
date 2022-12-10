import React from "react";
import { CardOurTeam } from "../Cards/CardSm";

import DATA from "../../DATA";
import classes from './Section.module.css'

export default function SectionOurTeam(props) {
  const {teamData} = DATA

  return (              
    <section className={ classes.section_card }>
          <div className={ classes.ourTeam }>
            <h2>{ teamData.title }</h2>
            <p>{ teamData.description }</p>
          </div>
          <CardOurTeam teamData={teamData.team} />
    </section>
    )
}
