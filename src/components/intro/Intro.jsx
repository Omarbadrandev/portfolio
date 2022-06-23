import React from 'react';
import './Intro.css';
import Me from '../../img/ProfilePhoto.png';

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi,</h2>
          <h1 className="i-name">I&apos;m Omar</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I am a fresh full-Stack software developer based in Germany, always
            looking for challenges in software development and looking forward
            to collect more experience in software development.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg" />
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default Intro;
