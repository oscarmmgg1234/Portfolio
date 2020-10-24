import React from "react";
import '../ComponentsCSS/about.css'
import Chart from "chart.js";


export default class About extends React.Component {
    chartRef = React.createRef();
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
                type: "horizontalBar",

                data: {
                    //Bring in data
                    labels: ['C++', 'Python', 'Full Stack Web Development', 'IT System Administrator', 'Database Management'],
                    datasets: [
                        {

                            label: "Core Skills",
                            hoverBorderColor: 'black',
                            hoverBorderWidth: 2,
                            barThickness: 35,
                            data: [100, 86, 70, 80, 80, 60, 0],
                            backgroundColor: ['#55B4B0', '#9B2335','#7FCDCD','#BC243C','#98B4D4']

                        }
                    ]
                },
                options: {
                    //Customize chart options
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    },



                }
            }
        );


    }
    render() {
        return (
            <>
            <div className="aboutContainer">

                <div>
                    <img src={require('../ASSETS/IMAGES/mount.JPG')} className={'aboutImage'}/>
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
                <div className={'canvasWrapper'}>
                <canvas
                    id="myChart"
                    className={'chart'}
                    ref={this.chartRef}
                />
                </div>
            </div>
                </>
        )
    }
}
