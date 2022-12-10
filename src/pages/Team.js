import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Shared/Modal";
import { PageWrapper } from "../components/Shared/Shared";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import DATA from "../DATA";
import classes from './Team.module.css'


export default function Team(props) {
  const { teamDataFull } = DATA
  const MY_ARR = ['Corestaff', 'Forró Teachers & Musicians', 'Skippers & Co-Skippers', 'Partners' ]

  const reverseNumberPicker = (str, lst_obj) => {
    const arr = [];
    
      lst_obj.forEach(obj =>{
        if (str.toLowerCase() === obj.groupName.toLowerCase() ) {
          return arr.push(obj) 
        }
      })
  
      return { title: str, list: arr }
    }


  const getTeamListByGroup = ( str, index ) => {  
    const { title, list } = reverseNumberPicker(str, teamDataFull)

    return (
      <div key={ index } className={ classes.team_wrapper}>
        <h2 className={ classes.group_name }>
          <span>{ title }</span>
        </h2>
        <div className={ classes.group_partners }>
          { 
              list.map( (item, index) => (
                <TeamItem key={ index } data={ item }/>
              ))
          }
        </div>
      </div>
    );
  }

  return (
    <PageWrapper
      title={ 'The Team' }  
      description= { `
      Here you can find the most common questions we've been asked so far. 
      Still have questions? Contact us at.` }
      >
        { 
          MY_ARR.map((item, index) => 
            getTeamListByGroup(item, index))
        }
    </PageWrapper>
  );
}


export function TeamItem(props) {
  const [modal, setModal] = useState()
  const [img, setImg] = useState(null)

  const textSum = props.data.description
                        .replace(/\s{1,}/g, ' ') // remove any large spaces and Linebreaks In the text
                        .substring(0, 321) + ' ...';
  

  const closeButton = () => {
    setModal(null);
  }




    const storage = getStorage();  
    
    getDownloadURL(ref(storage, props.data.imgPath ))
      .then((url) => {
        // `url` is the download URL
    
        // This can be downloaded directly:
        // const xhr = new XMLHttpRequest();
        // xhr.responseType = 'blob';
        // xhr.onload = (event) => {
        //   const blob = xhr.response;
        // };
        // xhr.open('GET', url);
        // xhr.send();

        setImg(url)
    
      })
      .catch((error) => {
        console.log(error)
      });


  return (
    
    <div className={ classes.partner_item }>
      { modal && <Modal title={modal.name} message={modal.description} onConfirm={ closeButton }/> }
      <div
        className={ classes.partner_image }
        style={{ backgroundImage: 
          `url(${ img })`,
        }}
      >
        <a
          href={ img }
          className={ '' }
        > 
        </a>        
      </div>
      <div className={ classes.partner_desc }>
        <h3 className={ classes.title }>
          { props.data.name }
          <span className={ classes.badge }>{ props.data.role }</span>
        </h3>
          {
            (textSum
              + ((325 - textSum.length) < 0 ? '' : 
                  ' '.repeat(325 - textSum.length)
                )  
            )  
          }
          <Link to={ `/team-details/${ props.data.id }` }>More </Link>
        <div className={ classes.events }>
          {
            props.data.editions.map((item, index) => (
            <Link key={ index } to={ `/event-details/${ item }` }>
              <strong>{ item }</strong>
            </Link>
            ))
          }          
        </div>
      </div>
    </div>
  );
}


