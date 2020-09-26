import React from 'react';
import {BrowserRouter as router,Link,Switch,Route} from 'react-router-dom';
import Home from './Components/home'
import NAVBAR from "./Components/navbar";
import About from "./Components/about";
import Contact from "./Components/contact";
import Portfolio from "./Components/portfolio";

import './App.css';



function App() {
    const [toggle,setToggle] = React.useState(false);
  return (
      <>
          <div className={"app"}>
              <NAVBAR nav={"OscarLand"} onToggle={()=>setToggle(!toggle)}/>
              <Home toggled={toggle} onClicked={()=>setToggle(!toggle)}/>
              <About/>
              <Portfolio/>
              <Contact/>
          </div>
      </>
          );
}

export default App;
