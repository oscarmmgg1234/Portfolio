import React from 'react';
import {BrowserRouter as router,Link,Switch,Route} from 'react-router-dom';
import Home from './Components/home'
import NAVBAR from "./Components/navbar";
import About from "./Components/about";
import Contact from "./Components/contact";
import Portfolio from "./Components/portfolio";

import './App.css';

function App() {
  return (
      <>
          <div className={"app"}>
              <NAVBAR/>
              <Home/>
              <About/>
              <Portfolio/>
              <Contact/>
          </div>
      </>
          );
}

export default App;
