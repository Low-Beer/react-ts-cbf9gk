import React, { useState } from "react";
import Input, {Button, Text} from "../Shared/FormElements";
// import { Prompt } from 'react-router-dom';

import classes from  './CardContactUs.module.css' //'./CardContactUs.module.css'

export default function CardContactUs(props) {
  const cls = 'card ' + props.className;
  const [isEntering, setIsEntering] = useState(false);  // TODO: not implemented yet.
  
  const [enteredFullName, setEnteredFullName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const [isValid, setIsValid] = useState(true);


  const FullNameChangeHandler = (event) => {
    setEnteredFullName(event.target.value);
  };
  const EmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const MessageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
    console.log('finishEnteringHandler fired')
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const msgData = {
      fullName: enteredFullName,
      email: enteredEmail,
      message: enteredMessage,
      date: new Date(Date.now())
      // id: Math.random().toString()
    };
    if (msgData.email.trim().length === 0) {
      setIsValid(false)
      return;
    } else{
      console.log(msgData)
      setEnteredFullName('');
      setEnteredEmail('');
      setEnteredMessage('');
    }
  };

  return (
    <>
      {/* <Prompt 
        when={isEntering} 
        message = { (location) => 'Are you sure you want to leave the page?'}
      /> */}
      <section className="card-contact-sec">
        
        {
        /* {error && (
          <ErrorModal
            title= {error.message}
            message= {error.message}
            onConfirm={errorHandler}
          />
        )}
        */
        }
            
        <form onSubmit={submitHandler}>
          <div className={ classes.wrapper }>                  
              <h4 className="card-contact-head">
                Don't be shy.
              </h4>
              <p className="card-contact-desc">
                You can also contact our team directly by emailing us at <a href="mailto:support@fsw.com">
                    <strong>support@fsw.com</strong></a>. 
                We will make our best to get back to you as soon as possible. 
              </p>

              <Input label= 'Full Name' type= 'text' value={enteredFullName}
                class= 'card-contact-inp'
                onChangefn={FullNameChangeHandler}
                placeholder= 'Full Name'
                />
              <Input label= 'Email' type= 'email' value={enteredEmail}
                class= {`card-contact-inp ${!isValid? 'invalid' : ''}`}
                onChangefn={EmailChangeHandler}
                placeholder= 'Email'
                />
              <Text label= 'Message' type= 'text' value={enteredMessage}
                class= 'card-contact-inp'
                placeholder= 'Type a message...' fn={MessageChangeHandler}
                />

              <Button label= 'Send Message'
                onClick={finishEnteringHandler}
                />
          </div>
        </form>
      </section>
    </>  
    )
}