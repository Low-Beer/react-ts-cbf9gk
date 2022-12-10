import React, { useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


import classes from './EventGallery.module.css';

const  EventGallery = (props) => { 
  return (
    <div className={ classes.event_gallery }>
        <div className={ classes.row }>
            <div className={ classes.col_12 }>
                <h2> Event Gallery</h2>
            </div>
            <ImageTile />
        </div>
    </div>
    );
};

export default EventGallery;




const  ImageTile = (props) => {

    const [img, setImg] = useState(null)
    const storage = getStorage();
  
    getDownloadURL(ref(storage, 'misc/logo.png' ))
    .then((url) => {
        setImg(url)
    }).catch((error) => {
      console.log(error)
    });

    return (
        <div className={ classes.col_6 }>
            <a  className="sl" href="https://www.yacht-rent.de/image/data/album-bavaria46/bavaria%2046%20bow%20sails%20sailing%20yacht.jpg">
                <div 
                    className={ `${classes.image} ${classes.lazy}`}
                    data-src="https://swingnsail.com/wp-content/uploads/2018/12/DJI_0528-768x509.jpg"
                    style={{backgroundImage: `url(${ img })`}}
                    // style={{backgroundImage: `url(${require('../../assets/img/logo.png')})`}}
                    >
                </div>
            </a>
        </div>
    );
};


const  ImageWrapper = (props) => {
    return (
        <>
            <div className="sl-wrapper simple-lightbox">
                <button className="sl-close" style="display: inline-block">×</button>
                <div className="sl-counter" style="display: block">
                    <span className="sl-current">1</span>/<span className="sl-total">28</span>
                </div>
                <div class="sl-navigation" style="display: block">
                    <button className="sl-prev">‹</button><button className="sl-next">›</button>
                </div>
                <div className="sl-spinner" style="display: none"><div></div></div>
                <div className="sl-image" style="top: 162.651px; left: 121.3px">
                    {/* <img
                    src="https://swingnsail.com/wp-content/uploads/2018/12/DJI_0528.jpg"
                    style="width: 970.4px; height: 643.699px"
                    /> */}
                </div>
            </div>
        {/* backdrop */}
        <div className="sl-overlay" style={{ display: 'block' }}></div>
        </>
    );
};