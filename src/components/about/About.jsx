import React from 'react';
import './about.css';
import about from '../../img/about.jpg';

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg" />
        <div className="a-card">
          <img src={about} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">test</p>
        <p className="a-desc">test</p>
      </div>
    </div>
  );
}

export default About;
