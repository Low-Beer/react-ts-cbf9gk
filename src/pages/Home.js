import React, { useState } from "react";
import CardSm, { CardTextTrans, CardWithNote } from "../components/Cards/CardSm.js";
import SectionOurValues from "../components/Sections/SectionOurValues.js";
import SectionAboutUs from "../components/Sections/SectionAboutUs.js";
import SectionHero from "../components/Sections/SectionHero.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// import CardContactUs from "../components/Cards/CardContactUs.js";
// import SectionOurTeam from "../components/Sections/SectionOurTeam.js";
import { DivDiagonalLine } from "../components/Shared/Shared.js";

import DATA from "../DATA.js";
import classes from './Home.module.css'

export default function Home(props) {
  const data = DATA;

  const [heroImg, setHeroImg] = useState(null)
  const storage = getStorage();

  getDownloadURL(ref(storage, data.hero.heroImg ))
  .then((url) => {
      setHeroImg(url)
  }).catch((error) => {
    console.log(error)
  });

  
  return (
    <>
        <SectionHero 
          overlayOpacity={true}  
          backgroundImage={`url(${ heroImg } )`}
          title={ data.hero.header }
          text={ data.hero.teaser }/>
        <section className={ classes.section }>
            <DivDiagonalLine />
            
            <div className="section-home-div-cards">
                { 
                  data.cardInfo.map((item, index) => (
                    <CardSm
                    key= {index}
                    icon = { item.icon }
                    title = { item.title }
                    description = { item.description }
                    
                    className={ classes.home_card }
                    styleIcon= {{width:"1.2rem", height:"1.2rem"}}
                    // styleCardWrapper= { { marginTop: "-8rem", marginBottom: "5rem" }}
                    />))
                }   
            </div>
        </section>
        <section className={ classes.section }>

            <div className={ classes.section_two }>
              <CardTextTrans />
              <CardWithNote cardInfo={ data.fotoCard } />
            </div>
          
        </section>

        <section className={ classes.section_card }>
          <DivDiagonalLine style={ {color: 'rgba(255, 255, 255, 1)', fill: 'currentColor' }} />

          <SectionAboutUs />
          
          {/* TODO: rework this. idealy. a new component for videos */}
          

          <div className={ classes.video_wrapper } >
            <iframe className={ classes.video } 
              width="900" height="506.25" src="https://www.youtube.com/embed/qRwzN6Py6sY" 
              style={{margin: 'auto'}}
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          </div>

        </section>
        
        {/* <SectionOurTeam /> */}
        
        <SectionOurValues ourValuesList={data.ourValuesList} />
        {/* <CardContactUs /> */}
    
    
    </>
  );
}
