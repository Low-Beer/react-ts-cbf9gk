import React, { useState } from "react";
import { SocialMediaList } from "../Shared/SocialMediaList";
import { SvgIcon } from "../Shared/IconList";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import './CardSm.css';
import classes from './CardSm.module.css'

export default function CardSm(props) {
  const [sharedState, setSharedState] = useState(props.param ? props.param : '')
  
  const handleFn = (e) => {
    e.preventDefault()
    if (!props.fn && !props.setFn) { return; }
    if (props.fn) { props.fn() }
    if (props.setFn) { setSharedState(sharedState); props.setFn(sharedState); }
    console.log(sharedState);

  }

  const text = (cont) => {
    if (cont && !Array.isArray(cont)) { return <p>{ cont }</p> }
    if (cont && Array.isArray(cont)) { 
      return (
        cont.map( (item, index) => (
          <p key={index}>{ item }</p>
        ))
      )
    }
  }

  return (              
    <Card styleCardWrapper={ props.styleCardWrapper } className={ props.className } >
        <div className={`${ classes.card_spec } ${ props.styleCard? props.styleCard : ''}`} onClick={ handleFn } >
          <SvgIcon 
            icon={ props.icon } 
            stl={ props.styleIcon }
            fill={ 'white' }
            myClass={ `card-sm-div ${ props.styleCircle ? props.styleCircle : props.icon}` }
          />
          <h4>{ props.title }</h4>
            { text(props.description) }
            { props.els && props.els } 

        </div>
    </Card>
    )
};


export function PrepPhaseList(props) {
  return (
    <div className={ classes.wrapper }>
        { props.ourValuesList.values.map( (item, index) => (
            <CardPrepPhase key={index} head={item.head} text={item.text} stage={item.stage}/>
        ))}
    </div>
    )
};


export function CardPrepPhase(props) {

  const isActive = () => {
    return props.stage? {color: 'var(--color-md-yellow)'} : {}
  }


    return (
    <div className="CardOurValue">
        <div className={ `${classes.circle} ${ props.stage? classes.active : '' }` }>
          <SvgIcon icon={ 'own_fsw_logo' } 
            stl={{ stroke: 'purple', opacity: 0.45, width: 32 }} />
        </div>

        <h6 className={`OurValuesHead`} style={isActive()}> { props.head } </h6>
        <p className="OurValuesText"> { props.text } </p>
    </div>
         
      )
  };


export function CardOurTeam(props) {

  return (
    <div className={ classes.wrapper }>
        { 
          props.teamData.map( (item, index) => (
          <div key={index} className="CardOurValue">
            <img alt="..." className="CardOurTeamImg" style={{ maxWidth: "120px" }}
              src={require( '../../assets/img/'+ item.foto )} />
              <h5 className="team-member-title">
                { item.name }
              </h5>
              <p > { item.position } </p>
              <SocialMediaList social= {item.social} />
          </div>
          ))
        }
      </div>     
    )
  };


export function BulletPointsItem(props) {

  return (
      <li className="bullet-points-item-li">
        <div className="bullet-points-item-li-div">
            <span className="bullet-points-item-li-div-span">
              { 
                props.bulletPoints.icon ? 
                  props.bulletPoints.icon : 
                  <SvgIcon  /> 
              }
            </span>
            <h5>
              { 
                props.bulletPoints.shortText ? 
                  props.bulletPoints.shortText : 
                  props.bulletPoints 
              }
            </h5>
        </div>
      </li>
  )
}

export function CardWithNote(props) {

  const [img, setImg] = useState(null)
  const storage = getStorage();

  getDownloadURL(ref(storage, 'misc/img_002.jpeg' ))
  .then((url) => {
      setImg(url)
  }).catch((error) => {
    console.log(error)
  });

  return (

        <div className="card-with-note-div-div">
          <img alt="..." src={ img } className={ classes.img }/>
          <blockquote className="card-with-note-div-div-blockquote">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="card-blockquote-svg"
              style={{ height: "95px", top: "-94px" }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="card-blockquote-svg-polygon"
                color="rgba(240,132,108, 1)"
              ></polygon>
            </svg>
            <h4 className="card-blockquote-h4">
              { props.cardInfo.title }
            </h4>
            <p className="card-blockquote-p">
              { props.cardInfo.description }
            </p>
          </blockquote>
        </div>
  
  )
}

export function CardTextTrans(props) {

  return (

    <div className={ classes.cont_wrapper }>
      <div className={ classes.wrapper_two }>
        <SvgIcon 
            icon={ "fa_heart" } 
            stl={ {color: 'rgba(240,132,108, 1)', width:"1.5rem", height:"1.5rem"} }
        />
      </div>
      <h3>Two passions, one story</h3>
      <p>
        Join us in this week-long journey to where we delve deeply 
        into our souls with forró rhythm in different inspiring scenery. 
        Just make sure you bring your good mood and energy. 
        The rest is on us.
      </p>
      <p>
        <strong>TODO: DUPLICATE</strong>Join us in this week-long journey to where we delve deeply 
        into our souls with forró rhythm in different inspiring scenery. 
        Just make sure you bring your good mood and energy. 
        The rest is on us.
      </p>

    </div>


  )
}

export function Card(props) {
  return (              
    <div className={`card ${props.className}`} style={ props.styleCardWrapper }> { props.children } </div>
    )
}