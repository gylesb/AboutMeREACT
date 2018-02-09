import React from 'react';
import Questival from '../Assets/img/rattlesnake.jpg';

function AboutMe(){
  <div style={{
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'black',
    padding: '40px'
  }}>
    <h2>About Gyles</h2>
    <div className = 'row'>
      <img src = {Questival} />
      <p>Just your typical 24 year old</p>
    </div>
  </div>;
}

export default AboutMe;
