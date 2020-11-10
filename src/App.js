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
import dashboard from "./Components/Dashboard";




function App() {
    const [toggle,setToggle] = React.useState(false);
  return (
      <>

          <div className={"app"}>
              <BrowserRouter>

                  <Switch>

                      <Route path={'/admin'} component={admin}/>
                        <Route path={'/dashboard'} component={dashboard}/>

               <Route path={'/'}>
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
               </Route>
                  </Switch>
              </BrowserRouter>
          </div>


      </>
          );
}

export default App;
