import React from "react";

// import { Button } from "./FormElements";

import classes from './Modal.module.css';

const  Modal = (props) => { 
  return (
    <div>
        <div className={classes.backdrop} onClick={ props.onConfirm }>
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    {/* <Button onClick={ props.onConfirm } >Close</Button> */}
                </footer>
            </div>
        </div>
    </div>
    );
};

export default Modal;