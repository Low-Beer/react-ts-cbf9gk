import React, { useState, useEffect } from "react";
import WebFont from 'webfontloader';

import Home from "./pages/Home.js";
import Rates from "./pages/Rates.js";
import Events from "./pages/Events.js";
import Team from "./pages/Team.js";
import Faqs from "./pages/Faq.js";

import './style.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/Layaout.js";
import EventDetails from "./pages/EventDetails.js";
import TeamDetails from "./pages/TeamDetails.js";
import Page404 from "./pages/NotFound.js";
import RatesDetails from "./pages/RatesDetails.js";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [pageStr, setPageStr] = useState(""); // or Home

    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Droid Sans', 'Chilanka']
        }
      });
     }, []);
     
    // useEffect(() => {
    //   const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    //   if (storedUserLoggedInInformation === '1') {
    //     setIsLoggedIn(true);
    //   }
    // }, []);

    const pageHandler = (str) => {
        setPageStr(str);
        // console.log("---- APP LEVEL ----")
        // console.log(str);
    }

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };

  return (
    <Layout>
      <Routes>  {/* NOTE: In react-router-dom v6, "Switch" is replaced by routes "Routes". */}
          
          <Route path='/' exact element={< Navigate to = '/home'/>} />

          <Route path='/home' element={ <Home/> }/>
          <Route path='/events' element={ <Events/> }/>
          <Route path='/team' element={ <Team/> }/>
          <Route path='/rates' element={< Rates/> }/>
          <Route path='/faq' element={ <Faqs/> }/>
          {/* {pageStr === 'faq'  && <Faqs />}   NOTE: the old way */}

          <Route path='/event-details/:eventId' element={ <EventDetails/> } />
          <Route path='/team-details/:memberId' element={ <TeamDetails/> } />
          <Route path='/rates-details' element={ <RatesDetails/> } />
          <Route path='*' element={ <Page404/> } />
      </Routes>
    </Layout>
  );
}

export default App;

