import React from 'react';
import Error404 from './Error404';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Header from './Header';
import NavBar from './NavBar';
import  { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className = "container">
      <style jsx global>{`
        body {
          font-family: Trebuchet MS;
          padding: 30px;
        }
      `}</style>
      <NavBar />
      <Header />
      <Switch>
        <Route path = '/about' component = {AboutMe} />
        <Route path = '/contact' component = {ContactMe} />
        <Route component = {Error404} />
      </Switch>
    </div>
  );
}

export default App;
