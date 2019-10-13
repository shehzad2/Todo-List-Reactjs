import React from 'react';
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [
 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
 'https://1.bp.blogspot.com/-4I49BVqciDM/XRsLvTgoIGI/AAAAAAAAAT4/mTW25oAFzmoWBVu8bRKBkwjaH-yTv4GQgCLcBGAs/s1600/background-%2B-images-%2Bfor%2B-photoshop%2B-editing%2B-hd%2B-online.jpg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const SliderComponent = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
         
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default SliderComponent