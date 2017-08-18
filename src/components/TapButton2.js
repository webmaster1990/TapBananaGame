// @flow
import React from 'react';

import './TapButton2.css';

export function TapButton2(props) {
  return (
      <div className="featured-image">
        <div className="round-button">
          <div className="round-button-circle" onClick={props.onTapButton}>
            <a className={` ${props.className}`}>
              <img src={`${props.btnImg}`} />
            </a>
          </div>
        </div>
      </div>
  );
}


// <div className="tapWrapper">
//   <div className="tap-button"
// onMouseUp={props.onReleased}
// onTouchEnd={props.onReleased}
// style={{backgroundImage: props.btnImg}}>
// {props.text}
// </div>
// </div>