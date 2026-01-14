import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Portrait from "./Components/homeC/portraitC";
import "./App.css";
const Home = lazy(() => import("./screens/home"));
const NAVBAR = lazy(() => import("./screens/navbar"));
const About = lazy(() => import("./screens/about"));
const Portfolio = lazy(() => import("./screens/portfolio"));
const Contact = lazy(() => import("./screens/contact"));

function App() {
  const [toggle, setToggle] = React.useState(false);
  const [signedIN, setSigned] = React.useState(false);


  return (
    <>
      <Portrait />
      <div className={"app"}>
        <BrowserRouter>
          <Suspense
            fallback={() => {
              return <div>Loading..</div>;
            }}
          >
            <Switch>
              
              <Route path={"/"}>
                <NAVBAR nav={"OscarLand"} onToggle={() => setToggle(!toggle)} />
                <section id={"home"} className={"sections"}>
                  <Home toggled={toggle} onClicked={() => setToggle(!toggle)} />
                </section>

                <section id={"about"} className={"sections"}>
                  <About />
                </section>
                <section id={"port"} className={"sections"}>
                  <Portfolio />
                </section>
                <section id={"contact"} className={"sections"}>
                  <Contact />
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
