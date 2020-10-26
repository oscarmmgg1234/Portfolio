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
import dashboard from "./Components/dashboard";




function App() {
    const [toggle,setToggle] = React.useState(false);
  return (
      <>

          <div className={"app"}>
              <BrowserRouter>
                  <NAVBAR nav={"OscarLand"} onToggle={()=>setToggle(!toggle)} />
                  <Switch>

                      <Route path={'/admin'} component={admin}/>


               <Route path={'/'}>


              <section id={"home"} className={"sections"}>

                  <Home onToggle={()=>setToggle(!toggle)}/>

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
               </Route>
                  </Switch>

              </BrowserRouter>
          </div>


      </>
          );
}

export default App;
