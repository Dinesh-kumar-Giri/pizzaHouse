import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import {BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices/>
    <Router/>
    </>
    
    
  );
}

export default App;
