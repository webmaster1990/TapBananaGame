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
    this.replayVideo = this.replayVideo.bind(this);
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
    if (this.videoElement2) {
      enableInlineVideo(this.videoElement2);
      this.videoElement2.addEventListener("loadstart", function (event) {
        this.className += " loading";
      });
      this.videoElement2.addEventListener("loadedmetadata", function (event) {
        this.className -= " loading";
      });
      this.videoElement2.load();
    }
  }

  replayVideo = () => {
    if ( this.state.curProblemNo === 0 ) {
      this.videoElement.play();
    }
    else if ( this.state.curProblemNo === 1 ) {
      this.props.onClick();
    }
  }

  onTapButton() {
    if ( problems.length  > this.state.curProblemNo + 1 ) {
      this.setState({
        curProblemNo: this.state.curProblemNo + 1
      });
      this.videoElement2.play();
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

        <Video video={problems[0].video} style={this.state.curProblemNo===1?{display:'none'}:{}}
             videoRef={el => this.videoElement = el}
             replayVideo={this.replayVideo}
        />
        <Video video={problems[1].video} style={this.state.curProblemNo===0?{display:'none'}:{}}
               videoRef={el => this.videoElement2 = el}
               replayVideo={this.replayVideo}
        />

        {this.showText()}
      </div>
    )
  }
}
