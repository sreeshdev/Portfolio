import React from 'react';
// import {Animated} from "react-animated-css";
import eduList from './List/eduList';
import MyEdu from './myEdu';

const styles = {
  textStyle: {
    textAlign: 'left',
  },
  eduStyle: {
    width: '100%',
    height: '200px',
  },
};

const Story = () => (
  <div style={styles.textStyle}>
  <h1>About me!</h1>
    <p>I am a Software Developer graduated M.Sc specialized in Software Systems (5 Years Integrated Course) in Kongu Engineering College, Perundurai.</p>

    <p>As childhood curiosity led to an educational focus in Software Development,
    more specifically Web. While working for ATOM Systems,
    I've gained experience in developing web projects using React JS, Node JS with backend MongoDB and 
    troubleshooting software issues both in the field and remotely.
    My work experience has been both challenging and fun working on programming
    projects with the added thrill of being able to write 
    with a few lines of code.</p>

    <p>The logical extension of my education and work experience coupled with my passion for technology is
    my continued desire to learn and build beautiful software solutions.</p>

    <p>When I'm not coding, I like to Watch movies, Read about technology news and Take drive in the car.</p>
    <hr />
    <h1>Education </h1>
    <div className='eduBlip' style={styles.eduStyle}>
      {eduList.map(item => (
          <MyEdu schoolName={item.schoolName} program={item.program} date={item.date} mark={item.mark} logo={item.logo} link={item.link} />
      ))
      }
    </div>
    <hr className='mt3'/>
    <div>
      <h1>Get in Touch</h1>
      <p>Mail: <a href="mailto:writetosreesh@gmail.com?Subject=Hello Sreenaath" target="_top">writetosreesh@gmail.com</a></p>
      <p>Phone: +91 8098951304</p>
    </div>
  </div>
);

export default Story;
