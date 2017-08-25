// @flow
import React, { Component } from 'react';
import {
  StaticCanvas,
  Background,
  CloudStorage,
  defaultLifeCycle
} from 'aq-miniapp';
import {
  View1,
  View2,
} from './js';
import bg from '../assets/bg.jpg';

import type { Output } from './Types';

type Props = {
  cloudStorageClient: CloudStorage,
  id?: string,
  data? : Object,
  mode: 'preview' | 'join'
}

export default class View extends Component {
  state: {
    currentPage: number,
    output: Output,
    data: ?Object,
    mode: 'preview' | 'join',
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      currentPage: 1,
      output: {},
      data: props.data,
      mode: props.mode
    }
  }

  _onView1Click() {
    this.setState({currentPage: 2});
  }

  _onView2Click(output: Output) {
    this.setState({currentPage: 1, output: output});
  }

  render() {
    const height = window.innerWidth;
    const width = window.innerHeight;
    let render = <StaticCanvas width={width} height={height}/>

      switch (this.state.currentPage) {
        case 1:
          render = <View1 onClick={this._onView1Click.bind(this)}/>
          break;
        case 2:
          render = <View2 onClick={this._onView2Click.bind(this)}/>
          break;
        default:
          break;
      }
    // }
    return (
      <div className="container">
        <Background
          image={bg}
        />
        {render}
      </div>
    );
  }
}
