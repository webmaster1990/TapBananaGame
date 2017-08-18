// @flow
import React, { Component } from 'react';
import { Button } from 'aq-miniapp';
import '../css/View.css';
export class View1 extends Component {
  render() {
    return (
      <div className="viewContainer justifyCenter">
        <Button className="start-button" title="Start" onClick={this.props.onClick}/>
      </div>
    )
  }
}
