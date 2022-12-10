import React, { useState } from "react";
import { SvgIcon } from "../components/Shared/IconList";
import { PageWrapper } from "../components/Shared/Shared";

import DATA from "../DATA";
import classes from './Faqs.module.css'

export default function Faqs(props) {
    const Faqs = DATA.faqInfo
  
    return (
        <PageWrapper
        title={ 'FAQs' }  
        description= { 'Here you can find the most common questions we\'ve been asked so far. Still have questions?Contact us at.' }
        >
        {
            Faqs.map( (item, index) => (
                <div key={index}>
                    <h2 className={ classes.category_heading }>  { item.subject } </h2>
                    <FaqList key={index} faqs= { item.topics }/>
                </div>                    
            ))
            
        }
        </PageWrapper>
    );
}


export function FaqList(props) {
    return (
    <>{
            props.faqs.map((item, index) => (
                <FaqItem key={index} faq= { item }/>    
            ))           
    }</>
    ) 
}


export function FaqItem(props) {
    const [checkBoxValue, setCheckBoxValue] = useState(false);
 
    // TODO:
    const paragraph = (str) => {       
        return (str
            .split('\n')
            .map((str, index) => 
                <p key={index}>{ str }</p>
        ))
            

    }


    return (
        <div className={ classes.faq_item }>
            <input type="checkbox" name="faq" checked={ checkBoxValue }  readOnly/>
            <label onClick={() => setCheckBoxValue(!checkBoxValue)}>
                <span className={ classes.faq_icon }>	
                    <SvgIcon icon={ 'own_right_facing_arrow' }/>
                </span>
                <div onClick={() => setCheckBoxValue(!checkBoxValue)}> 
                    { props.faq.question } 
                </div>
            </label>
            <div className={ classes.faq_answer }>
                { paragraph(props.faq.answer) }
            </div>
        </div>
      );

}
