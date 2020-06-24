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
import Footer from './components/footer.jsx';
import Navigation from './components/navigation.jsx';
import State from './context/state';
function App() {
  return (
    <State>
    <div className="app">
    <Navigation/>
      <Header/>
      <About/>
      <Features/>
      <Tours/>
      <Story/>
      <Booking/>
      <Footer/>
<br/>
      <FetchRandomUser/>
      <AxiosAPI/>
      <Instagram/>
insta
      
      <Grid/>
    </div>
    </State>
  );
}
export default App;

