import React from 'react';
import {BrowserRouter as router,Link,Switch,Route} from 'react-router-dom';
import Home from './Components/home'
import NAVBAR from "./Components/navbar";

import './App.css';

function App() {
  return (
      <>
          <div className={"app"}>
        <NAVBAR/>
    <Home/>
          </div>
  </>
          );
}

export default App;
