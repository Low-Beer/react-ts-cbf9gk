import React from "react";
import { useLocation } from 'react-router-dom';

import { BulletPointsItem } from "../components/Cards/CardSm.js";
import DecoyPricing from "../components/DecoyPricing/DecoyPricing.js";
import { SvgIcon } from "../components/Shared/IconList.js";
import { PageWrapper } from "../components/Shared/Shared.js";

import DATA from "../DATA.js";
import classes from './Rates.module.css'

export default function Rates(props) {
  const { ratesData } = DATA
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);  // ?medal=asc
  const getMedal = queryParams.get('medal');  // asc

  const rate = ratesData.find((rate) => rate.title.toLowerCase() === 'general')


  return (
      <PageWrapper 
        title={ ['Rates ', <SvgIcon key={1} icon={ "fa_medal" } stl= {{margin: 'auto'}}/>] }  
        description= { rate && rate.description }
        >

        {/* {!rate && <div> Which medal suits you best? <SvgIcon icon={ "fa_medal" } stl={ props.styleIcon } /></div>} */}
        { rate &&
            <div >
              {/* <h3>{ rate.title }</h3>
              <p>{ rate.description } </p> */}
              
              <h3>Included:</h3>
              <ul className={ classes.list }>
                { rate.included.map((item, index) => (
                  <BulletPointsItem key= {index} 
                    bulletPoints={ ({icon: <SvgIcon icon={ "fa_check" }/>, shortText: item}) }/>
                  ))
                }
              </ul>   
              
              <h3>Not Included:</h3>
              <ul className={ classes.list }>
                { rate.notIncluded.map((item, index) => (
                  <BulletPointsItem key= {index} 
                    bulletPoints={ ({icon: <SvgIcon icon={ "fa_times" }/>, shortText: item}) }/>
                ))}
              </ul>

              <hr/>
            </div>
        }  
        <hr/>
        <DecoyPricing data={ ratesData } />
      </PageWrapper>
  );
}












