import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { PageWrapper } from "../components/Shared/Shared";
import BoatGallery from "../components/Gallery/BoatGallery";
import ImageTile from "../components/Gallery/EventGallery.js";

import DATA from "../DATA";
import DecoyPricing from "../components/DecoyPricing/DecoyPricing";


const RatesDetails = () => {
    const { ratesData } = DATA

    const [imageUrls, setImageUrls] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const location = useLocation();  
    const queryParams = new URLSearchParams(location.search);  // ?medal=asc
    const getMedal = queryParams.get('medal');  // asc

    useEffect(
      () => window.scrollTo(0, 0)
    )

    // const params = useParams();


    // const member = teamDataFull.find((member) => member.id === params.memberId)
    //
    // if(!member) {
    //     return <p>Member not found</p>
    // } 

    const rate = ratesData.find((rate) => rate.title.toLowerCase() === getMedal)

    return (
    <PageWrapper
        title={ rate.title }  
        description= { rate.description }
    >
        <BoatGallery imageUrls={imageUrls} loading={isLoading} error={error}/>
        <ImageTile />
        { 
            rate &&
                <div>              
                    <hr/>
                </div>
        }  
          <DecoyPricing data={ ratesData } />
    
    </PageWrapper>
    )
}


export default RatesDetails;