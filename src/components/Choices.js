// @flow
import React from 'react';

import './Choices.css';

function ListItem(props) {

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];

  function mouseUp(event){
    console.log(props.index, props.value);
    props.onSelected(props.value, letters[props.index]);
  }

  // Correct! There is no need to specify the key here:
  return <div className="choice-item" onMouseUp={(event) => mouseUp(event)}><span className="abc">{letters[props.index]}. </span>{props.value}</div>;
}

export function Choices(props) {

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    var newarray = array.slice(0);

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = newarray[currentIndex];
      newarray[currentIndex] = newarray[randomIndex];
      newarray[randomIndex] = temporaryValue;
    }

    return newarray;
  }

  const arr = shuffle(props.choice.choices);

  return (
    <div>
     {arr.map((choice, index) => <ListItem key={index} index={index} value={choice} onSelected={props.onSelected}/>)} 
    </div>
  );
}

  