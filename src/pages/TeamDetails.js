import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { PageWrapper } from "../components/Shared/Shared";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import DATA from "../DATA";
import classes from './TeamDetails.module.css'

const TeamDetails = () => {
    const params = useParams();
    const { teamDataFull } = DATA;
    const [img, setImg] = useState(null)


    const member = teamDataFull.find((member) => member.id === params.memberId)

    if(!member) {
        return <p>Member not found</p>
    }
    
    const storage = getStorage();  
    
    getDownloadURL(ref(storage, member.imgPath ))
      .then((url) => {
        //// `url` is the download URL
    
        //// This can be downloaded directly:
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
        <PageWrapper
            // title={ `${ member.name }` }  description= { member.groupName }
        >
        <div id={ classes.wrapper }>
            <div className={ classes.container }>
                <div className={ classes.row }>
                    <div className={ `${classes.col12} ${classes.col_lg_8}` }>
                        <div className={ classes.cover_img }>
                            <img 
                                className={ classes.img_fluid }
                                src={ img }
                                alt={ member.name }
                            />
                            <noscript>
                                <img src={ img }
                                alt={ member.name } 
                                className={ classes.img_fluid }
                            /></noscript>

                            <div className={ classes.title_card }>
                                <h1 className={ classes.partner_title }>{ member.name }</h1>
                                <div className={ classes.partner_title }>
                                    {/* TODO: <Link to={ `/roles/${ member.groupName.toLowerCase() }` }> */}
                                    <a href="https://swingnsail.com/type/teacher/" rel="tag">{ member.groupName }</a>
                                </div>
                            </div>
                        </div>
                        <div className={ classes.partner_content }>
                            { member.description }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </PageWrapper>
    )
}


export default TeamDetails;