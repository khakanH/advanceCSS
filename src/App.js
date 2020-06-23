import React from 'react';
import logo from './logo.svg';
// import './assets/css/app.css';
import './assets/scss/main.scss';
import Header from './components/header';
import Grid from './components/grid';
import About from './components/about.jsx';
import Features from './components/feature.jsx';
import Tours from './components/tours.jsx';
import Story from './components/story.jsx';
import FetchRandomUser from './components/rahdomapi.jsx';
import AxiosAPI from './components/axios';
import Instagram from './components/instagramapi.jsx';
import Booking from './components/booking.jsx';
import State from './context/state';
function App() {
  return (
    <State>
    <div className="app">
      <Header/>
      <About/>
      <Features/>
      <Tours/>
      <Story/>
      <Booking/>
<br/>
      <FetchRandomUser/>
      <AxiosAPI/>
      <Instagram/>

      
      <Grid/>
    </div>
    </State>
  );
}
export default App;
