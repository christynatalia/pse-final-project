import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemsGalery from './components/ItemsGalery';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import AddRoom from './components/AddRoom';
import SensorsGalery from './components/SensorsGalery';
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ItemsGalery}>
      </Route>
      <Route path="/addRoom" exact component={AddRoom}>
      </Route>
      <Route path="/sensors" exact component={SensorsGalery}>
      </Route>
    </BrowserRouter>
   
  );
}

export default App;
