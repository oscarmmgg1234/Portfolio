import React, {Suspense,lazy} from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Portrait from "./Components/homeC/portraitC";
import './App.css';
const Home = lazy(()=>import('./screens/home'))
const NAVBAR = lazy(()=>import( "./screens/navbar"));
const About = lazy(()=>import('./screens/about'));
const Portfolio = lazy(()=>import( "./screens/portfolio"));
const Contact = lazy(()=>import("./screens/contact"));
const Admin = lazy(()=>import( "./screens/admin"));
const Dashboard = lazy( ()=>import("./screens/Dashboard"));


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
          <Portrait/>
          <div className={"app"} >

                  <BrowserRouter>
                      <Suspense fallback={()=>{return <div>Loading..</div>}}>
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

              <section id={"about"}  className={"sections"}>
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
                      </Suspense>
              </BrowserRouter>

          </div>
      </>
          );
}

export default App;
