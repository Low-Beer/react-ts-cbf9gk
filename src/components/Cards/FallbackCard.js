import React from "react";
import './Card.css';

export default function FallbackCard(props) {

  return (              
    <div className='card'> {props.children} </div>
    )
}

// TODO: place here the CardSm