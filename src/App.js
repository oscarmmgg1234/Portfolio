import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './Components/home'
import NAVBAR from "./Components/navbar";
import About from "./Components/about";
import Contact from "./Components/contact";
import Portfolio from "./Components/portfolio";
import './App.css';
import contact from "./Components/contact";
import Admin from "./Components/admin";
import Dashboard from "./Components/Dashboard";




function App() {
    const [toggle,setToggle] = React.useState(false);
    const [signedIN,setSigned] = React.useState(false);
  return (
      <>

          <div className={"app"}>
              <BrowserRouter>

                  <Switch>

                      <Route path={'/admin'} >
                          <Admin onSigned={()=>setSigned(true)} />
                      </Route>
                        <Route path={'/dashboard'} >
                        <Dashboard signedStatus={signedIN}/>
                        </Route>

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
