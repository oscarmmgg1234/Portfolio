import React from "react";
import '../../ComponentsCSS/about.css'
import ChartR from "./chartR";

const AboutC = () => {
    return (
        <div className="aboutContainer">
            <div>
                <img src={require('../../ASSETS/IMAGES/stand.png')} className={'aboutImage'}/>
                <div className={"aboutTitle"}>
                    About Me
                </div>
                <div className={"aboutTitle1"}>
                    " Im an software engineer located in the Coachella Valley, California,
                </div>
                <div className={"aboutTitle2"}>
                    my passion is to to program, the intriguing thought of being able to turn any
                </div>
                <div className={"aboutTitle3"}>
                    idea into reality just fascinates me and fuels me to learn and master. Currently pursuing
                </div>
                <div className={"aboutTitle4"}>
                    my Bachelors In Computer Science and will be obtaining it 2020. When im not
                </div>
                <div className={"aboutTitle5"}>
                    programming, I enjoy going to the gym and spending time with my family. "
                </div>
            </div>
            <ChartR/>
        </div>
    )//end of return
}//end of component

export default AboutC