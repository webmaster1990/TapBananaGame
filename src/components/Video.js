// @flow
import React from 'react';

import './Video.css';

export function Video(props) {
  return (
    <video  
      playsInline
      onEnded={props.replayVideo}
      id="videoFrame" 
      ref={props.videoRef}
      style={ props.style }
      onTimeUpdate={
        (event)=>{
          if (props.stopPosition){
            if (event.target.currentTime >= props.stopPosition) {
              props.moveState();
            }
          }
        }
      }
    >
      <source src={props.video} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  );
}