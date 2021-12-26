import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemsGalery from './components/ItemsGalery';
function App() {
  return (
   <div className="App">
     <ItemsGalery/>
   </div>
  );
}

export default App;
