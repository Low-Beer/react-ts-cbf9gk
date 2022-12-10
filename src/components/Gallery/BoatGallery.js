import React, { memo } from "react";
import { SvgIcon } from "../Shared/IconList";



import classes from './BoatGallery.module.css';

const  BoatGallery = memo((props) => {
  
  // const ordering = (index, url) => {
  //   console.log(index)
  //   if (index % 9 === (1 || 3 || 8)) {
  //       return <ImageLong url={ url } key={index}/>;
  //   } else {
  //     return <ImageShort url={ url } key={index}/>;
  //   }
  // }

  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (!props.loading) {
    taskList = props.imageUrls.map((item, index) => (
        // ordering(index, item)
        <ImageShort url={ item } key={index}/>
    ))
  }

  let content = taskList;

  if (props.error) {
    content = <div >Something went wrong!</div>;
  }

  if (props.loading) {
    content = 'Loading tasks...';
  }

  return (
    <div className={ `${classes.boat_gallery} ${classes.container}` }>
        <div className={ classes.header }>			
						<h2>Event gallery</h2>
        </div>
        <div className={ classes.row }>
            { content }
        </div>
    </div>
    );
});

export default BoatGallery;


const  ImageShort = (props) => { 
    return (
<div className={`${classes.col_12} ${classes.col_image}`}>
  <a
    href={props.url}
  >
    <div
      className={`${classes.image_wrapper}`}
      style={{backgroundImage: `url(${props.url})`}}
    >
      <div className={ classes.zoom_animation }>
        <SvgIcon icon={ 'own_mag_glass' } />
      </div>

      <div className={ classes.image_overlay }></div>
    </div>
  </a>
</div>

    );
};
  
const  ImageLong = (props) => { 
    return (
        <div className={`${classes.col_6} ${ classes.col_image}`}>
        <a
          href={props.url}
        >
          <div
            data-bg="https://swingnsail.com/wp-content/uploads/2018/12/G0286373-768x576.jpg"
            className={ classes.image_wrapper } 
            style={{backgroundImage: `url(${props.url})`}}
            data-ll-status="loaded"
          >
            <div className={ classes.zoom_animation }>
              <SvgIcon icon={ 'own_mag_glass' }/>
            </div>
            <div className={ classes.image_overlay }></div>
          </div>
        </a>
      </div>      
    );
};