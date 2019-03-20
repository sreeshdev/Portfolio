import React, { Component } from 'react';
import Me from './image/Profile/Me.jpg';
import Footer from './Footer';
import './aboutStyle.css';




class Sreeprofile extends Component {
  render() {
    return (
      <section className="tc pa3 pa5-ns">
        <article className="hide-child relative b--black-20 mw5 center mySoc">
          <img src={Me} className="br-100 myPic" alt="my logo"></img>
          <div className="pa2 bt b--black-20">
            <h1 className="f4 animated pulse infinite">Sreenaath Vaithiyanathan</h1>
            <hr className="mw3 bb bw1 b--black-10"></hr>
          </div>
          <Footer />
        </article>
      </section>
    );
  }
}

export default Sreeprofile;
