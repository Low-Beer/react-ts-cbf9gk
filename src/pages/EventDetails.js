import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useParams } from 'react-router-dom';
import CardSm from "../components/Cards/CardSm";
import BoatGallery from "../components/Gallery/BoatGallery";
import SectionHero from "../components/Sections/SectionHero";
import { DivDiagonalLine, PageWrapper } from "../components/Shared/Shared";
import { ref } from "firebase/storage";
import { getImageFolder, storage,  } from "../firebase/firebase";

import DATA from "../DATA";
import classes from './EventDetails.module.css'

const EventDetails = () => {
    const params = useParams();
    const { eventsData } = DATA;
    // 
    const [imageUrls, setImageUrls] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const imagesListRef = ref(storage, `events/${params.eventId}`);

    const event = eventsData.find((event) => event.id === params.eventId)

    const fetchData = useCallback(() => {
        getImageFolder(imagesListRef, setImageUrls, setIsLoading, setError);
    }, []);

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const teachersAndMusiciansArr = [...event.teachers, ...event.musicians];

    if(!event) {
        return <p>Event Details not found</p>
    }

    return (
    <>
        <SectionHero  
            backgroundImage={`url(${event.imgPath})`}
            key={ event.id }
        />
        <section className={ classes.section }>
            <DivDiagonalLine
                style={{ color: "white", fill: "currentColor" }}
            />                 
            <div className={ classes.section_cards }>
                <CardSm
                // title = { event.region }
                // description = { [event.title, (event.date[0] + ' - ' + event.date[1]).toString()] }
                els= {
                    <>
                        <div className={ classes.header }>{ event.region }</div>
                        <span>{ event.title }</span>
                        <h4 >{ event.date[0] + ' - ' + event.date[1] }</h4>
                    </>
                }
                className={ classes.event_card }
                styleIcon= {{width:"1.2rem", height:"1.2rem"}}
            /></div>
        </section>
            { /****  Event Partners ****/ }
            <div className={ classes.event_partners }>
                <div className={ classes.teachers }>
                    Teachers & Musicians:&nbsp;
                    { 
                        teachersAndMusiciansArr.map((item, index) => (
                        <li key={index} >
                            <Link to={ `/teachers/${ item.toLowerCase() }` }>{ item }</Link>
                            { (index +1) !== teachersAndMusiciansArr.length && <spam key={index}>,&nbsp;</spam> }
                        </li>
                        )) 
                    }
                </div>
                <div className={ classes.teachers }>
                    Skippers & Co-Skippers:&nbsp;
                    { 
                        event.skippers.map((item, index) => (
                        <li key={index} >
                            <Link to={ `/teachers/${ item.toLowerCase() }` }>{ item }</Link>
                            { (index +1) !== event.teachers.length && <spam key={index}>,&nbsp;</spam> }
                        </li>
                    ) ) }
                </div>
            </div>
            <div className={ `${classes.test}  ${classes.container}` }>
                <h3>Sailor log:</h3>
                <p>{ event.description }</p>
            </div>
        <BoatGallery imageUrls={imageUrls} loading={isLoading} error={error}/>
    </>
    )
}


export default EventDetails;