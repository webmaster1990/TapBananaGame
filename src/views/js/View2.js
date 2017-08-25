// @flow
import React, {Component} from 'react';
import type {Output} from '../Types';
import enableInlineVideo from 'iphone-inline-video';
import {Background} from 'aq-miniapp';
import {Video} from '../../components/Video';
import {TapButton2} from '../../components/TapButton2';
import {problems} from '../../components/problems';
import bg from '../../assets/bg.jpg';
import bananabtn from '../../assets/banana_image.png';
import '../css/View2.css';


export type Props = {
  onLoad: (Output) => void
};

export class View2 extends Component {
  videoElement = null;

  state: {
    output: Output,
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      output: {},
      curProblemNo: 0,
      className: '',
    }

    this.showText = this.showText.bind(this);
    this.onTapButton = this.onTapButton.bind(this);
  }

  componentDidMount() {
    if (this.videoElement) {
      enableInlineVideo(this.videoElement);
      this.videoElement.addEventListener("loadstart", function (event) {
        this.className += " loading";
      });
      this.videoElement.addEventListener("loadedmetadata", function (event) {
        this.className -= " loading";
      });
      this.videoElement.play();
    }
  }

  onTapButton() {
    if ( problems.length  > this.state.curProblemNo + 1 ) {
      this.setState({
        curProblemNo: this.state.curProblemNo + 1
      });
      this.videoElement.load();
      this.videoElement.play();
      setTimeout(() => {
        this.setState({
          className: 'slideUp',
        });
        
      }, 500);
      setTimeout(() => {
        this.setState({
          className: 'slideUp active',
        });
      }, 500);
    } else {
      this.props.onClick();
    }

  }

  showText() {
      return (
        <div className="before-play">
          <TapButton2 btnImg={`${bananabtn}`} className={this.state.className} onTapButton={this.onTapButton}/>
        </div>
      );
  }

  render() {
    return (
      <div className="viewContainer justifyCenter">
        <Background
          image={bg}
        />
        {
          problems[this.state.curProblemNo] &&
        <Video video={problems[this.state.curProblemNo].video}
               videoRef={el => this.videoElement = el}
          />
        }
        {this.showText()}
      </div>
    )
  }
}
