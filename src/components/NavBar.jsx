import React from 'react';


function NavBar(){
  return (
    <div className="row" style={{
      padding: '10px',
      textAlign: 'center',
      borderWidth: '2px',
      borderColor: 'black',
      borderStyle: 'solid',
      borderRadius: '5px'
    }}>
      <div className="col-md-4">
        <a href='/#/about'>About Me</a>
      </div>
      <div className="col-md-4">
        <a href='/'>Home</a>
      </div>
      <div className="col-md-4">
        <a href='/#/contact'>Contact</a>
      </div>
    </div>
  );
}

export default NavBar;
