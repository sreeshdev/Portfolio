/* eslint-disable */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import sreelogo from "./image/icon.png";

class Navbar extends Component {
  render() {
    const styles = {
      navColor: {
        background: "rgb(74, 158, 134)",
 // position: "fixed"
      },
      textColor: {
        color: "rgb(255,255,255)"
      }
    };
    return (
      <nav
        style={styles.navColor}
        className="db dt-l w-100  pa3 ph5-l "
      >
        <Link
          id="home"
          className="db  v-mid mid-gray link grow w-100 w-25-l tc tl-l "
          to={"/"}
          title="Home"
        >
          <img src={sreelogo} className="dib w2 h2 br-100" alt="Site Name" />
        </Link>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <Link
            id="about"
            style={styles.textColor}
            className="link dim  f6 f5-l dib mr3 mr4-l"
            to={"/about"}
            title="About"
          >
            About Me
          </Link>
          <Link
            to={"/"}
            style={styles.textColor}
            className="link dim  f6 f5-l dib mr3 mr4-l"
            to={"/skill"}
            title="Skills"
          >
            My Skills
          </Link>
          <Link
            id="projects"
            style={styles.textColor}
            className="link dim  f6 f5-l dib mr3 mr-l"
            to={"/project"}
            title="Projects"
          >
            Projects
          </Link>
          {/* <Link id='contact' style={styles.textColor} className="link dim  f6 f5-l dib" to={'/contact'} title="Contact">Contact</Link> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
