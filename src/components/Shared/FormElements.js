import React from "react";
import './Shared.css'

// input, text, button
export default function Input(props) {
  
    return (
        <div className="relative w-full mb-3">
            <label
                className="form-control"
                htmlFor="email">
                {props.label}
            </label>
        <input
            onChange={props.onChangefn}
            value={props.value}
            type={props.type}
            className={props.class}
            placeholder={props.placeholder}
            style={{ transition: "all .15s ease" }}
        />
    </div>
    );
};


export function Text(props) {
  
    return (
        <div className="relative w-full mb-3">
            <label className="form-control" htmlFor="message" >
                { props.label }
            </label>
            <textarea
                value={props.value}
                onChange={props.fn}
                rows="4" cols="80"
                className={props.class}
                placeholder={props.placeholder}
            />
        </div>
    );
};


export function Button(props) {
  
    return (
        <div className="btn">
            <button
                onClick={ props.onClick }
                className="btn-div"
                type={props.type}
                style={{ transition: "all .15s ease" }}
            >
                    { props.label }
            </button>
        </div>
    );
};
