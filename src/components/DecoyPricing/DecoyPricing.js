import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import CardSm from "../Cards/CardSm";


import classes from './DecoyPricing.module.css';

const  DecoyPricing = (props) => { 
    const navigate = useNavigate();
    
    const clickMedalHandler = (str) => {
        // console.log(medalElRef)
          navigate('/rates-details?medal=' + str);
      };


  return (
    <div className="section-home-div-cards"> 
    { 
      props.data
        .filter(item => item.title.toLowerCase() !== 'general')
        .map((item, index) => (
        <CardSm
          key = { index }
          icon = { "fa_medal" }
          title = { item.title }
          description = { item.description }
          param = { item.title.toLowerCase() }
          
          //// style&class
          styleIcon = { {width:"1.2rem", height:"1.2rem", color: '#e39130'} }
          styleCircle = { item.title.toLowerCase() }
          styleCard = { "rates_" + item.title.toLowerCase() } 
          // styleCardWrapper= { {backgroundColor: "pink"}}
          
          //// functions
          //fn = { clickMedalHandler }
          setFn = { clickMedalHandler }
        />
      ))
    }
    <div className={ classes.economy_wrapper }>
      <h4>PS: besides the standard cabin tickets per budget/boat size, we also have following ticket options, which are offered at discounted prices: saloon bed & Bow Cabin</h4>
      <ul className={ classes.ul_economy }>
        <NavLink to='/rates-details?medal=bow-cabin' ><li>Saloon & Bow Cabin</li></NavLink>
        {/* <NavLink to='/rates-details?medal=saloon' ><li>Saloon</li></NavLink> */}
        {/* <a class="btn btn-lg btn-success">Purchase Now</a>  or btn btn-outline-warning mb-0  */}

      </ul>
    </div>
  </div>
    );
};

export default DecoyPricing;