import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './screens/home'
import NAVBAR from "./screens/navbar";
import About from "./screens/about";
import Contact from "./screens/contact";
import Portfolio from "./screens/portfolio";
import './App.css';
import contact from "./screens/contact";
import Admin from "./screens/admin";
import Dashboard from "./screens/Dashboard";




function App() {
    const [toggle,setToggle] = React.useState(false);
    const [signedIN,setSigned] = React.useState(false);
    const fireConfig = {  apiKey: "AIzaSyCLVMM8vmHBNT--ldKCBZmmUi5IEv-Ed1o",
        authDomain: "webportf-f8d66.firebaseapp.com",
        databaseURL: "https://webportf-f8d66.firebaseio.com",
        projectId: "webportf-f8d66",
        storageBucket: "webportf-f8d66.appspot.com",
        messagingSenderId: "26027074277",
        appId: "1:26027074277:web:448a6046ae80ce973aea0c",
        measurementId: "G-LXZBXVH5S6"}

        return (
      <>
          <div className={"app"}>
              <BrowserRouter>
                  <Switch>
                      <Route path={'/admin'} >
                          <Admin onSigned={()=>setSigned(true)} config={fireConfig}/>
                      </Route>
                        <Route path={'/dashboard'} >
                        <Dashboard signedStatus={signedIN} config={fireConfig}/>
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
