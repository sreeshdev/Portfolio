import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import Sreelogo from './image/sree logo.svg';
import './aboutStyle.css';


const style = {
  landing: {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    margin: 'auto',

//     overflow: 'hidden',
//     width: '100%',
// height: '100%',
// clip: 'auto',

  },
  textStyle: {
    // textAlign: "-webkit-center",
    textAlign: 'center',
    color: 'rgb(53, 126, 105)',
  },
  textHighLight: {
    color: 'rgb(255,165,0)',
  },
  socialLink: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: '10px',
    paddingLeft: '10px',
    position: 'static',
    overflow: 'hidden',
    color: 'rgb(0, 0, 0)'
     
  },
};
const socialLinks = (
  <div style={style.socialLink}>
    <Animated
      className="pa2"
      animationIn="zoomIn"
      animationOut="fadeOut"
      isVisible={true}
    >
      <p>
        <a
          href="https://www.linkedin.com/in/sreenaath-vaithiyanathan-22126917b/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="link dim"
        >
          Linkedin
        </a>
      </p>
    </Animated>
    <Animated
      className="pa2"
      animationIn="zoomIn"
      animationOut="fadeOut"
      isVisible={true}
    >
      <p>
        <a
          href="https://github.com/sreeshdev"
          target="_blank"
          rel="noopener noreferrer"
          className="link dim"
        >
          GitHub
        </a>
      </p>
    </Animated>
  </div>
);

class Landing extends Component {
  state = {
    isLoaded: false,
    displaySocial: null,
  };

  componentDidMount() {
    this.isLoaded = true;
    // console.log()
    setTimeout(() => {
      this.setState({ displaySocial: socialLinks });
    }, 2500);
  }

  render() {
    return (
      <div id="introPage" className="mw7 br3 pa2 mv5 " style={style.landing}>
        <div className="landingtext animated fadeIn">
          <Animated
            animationIn="fadeInRight"
            isVisible={this.isLoaded}
            animationInDelay={500}
            style={style.textStyle}
          >
            <h1 className="f-subheadline measure tex">
              Sreenaath <span style={style.textHighLight}>Vaithiyanathan </span>
            </h1>
          </Animated>
          <Animated
            animationIn="fadeInLeft"
            isVisible={this.isLoaded}
            animationInDelay={1000}
            style={style.textStyle}
          >
            <h3 className="f2 lh-title"> Software Developer </h3>
          </Animated>
          </div>
          <div>
          <Animated animationIn="pulse infinite" >
            <img id="loadImg" src={Sreelogo} alt="" width="100px" height="100px"/>
          </Animated>
          
        </div>
        {this.state.displaySocial}
      </div>
    );
  }
}
export default Landing;
