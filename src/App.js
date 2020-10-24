import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './Components/home'
import NAVBAR from "./Components/navbar";
import About from "./Components/about";
import Contact from "./Components/contact";
import Portfolio from "./Components/portfolio";
import './App.css';
import contact from "./Components/contact";
import admin from "./Components/admin";



function App() {
    const [toggle,setToggle] = React.useState(false);
  return (
      <>
          <BrowserRouter>
          <div className={"app"}>

              <NAVBAR nav={"OscarLand"} onToggle={()=>setToggle(!toggle)} />


              <section id={"home"} className={"sections"}>

              <Home toggled={toggle} onClicked={()=>setToggle(!toggle)}/>
              </section>

              <section id={"about"} className={"sections"}>
              <About/>
              </section>
              <section id={"port"} className={"sections"}>
              <Portfolio/>
              </section>
              <section id={"contact"} className={"sections"}>
              <Contact/>
              </section>

          </div>

          </BrowserRouter>
      </>
          );
}

export default App;
