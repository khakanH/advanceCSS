import React from 'react';
import logo from './logo.svg';
// import './assets/css/app.css';
import './assets/scss/main.scss';
import Header from './components/header';
import State from './context/state';
function App() {
  return (
    <State>
    <div className="app">
      <Header/>
    </div>
    </State>
  );
}
export default App;
