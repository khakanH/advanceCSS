import React from 'react';
import logo from './logo.svg';
// import './assets/css/app.css';
import './assets/scss/main.scss';
import Header from './components/header';
import Grid from './components/grid';
import About from './components/about.jsx';
import Features from './components/feature.jsx';
import State from './context/state';
function App() {
  return (
    <State>
    <div className="app">
      <Header/>
      <About/>
      <Features/>
      <Grid/>
    </div>
    </State>
  );
}
export default App;
