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
                            data: [100, 86, 80, 80, 80, 60, 0],
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
