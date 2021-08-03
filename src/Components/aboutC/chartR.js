import React from 'react'
import Chart from 'chart.js'
import '../../ComponentsCSS/about.css'

export default class ChartR extends React.Component{
    chartRef = React.createRef();
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
                type: "horizontalBar",

                data: {

                    //Bring in data
                    labels: ['C++', 'Javascript/NodeJs', 'React/React-Native', 'AWS', 'Python'],
                    datasets: [
                        {


                            hoverBorderColor: 'black',
                            hoverBorderWidth: 2,
                            barThickness: 25,
                            data: [100,90, 85, 85, 87, 0],
                            backgroundColor: ['#55B4B0', '#9B2335','#7FCDCD','#BC243C', '#BC255C']

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

                    legend:{
                        labels:{
                            fontColor: "white"
                        },
                        display: false,
                        fontColor: "white"
                    }


                }
            }
        );


    }//end of component did load
    render() {
        return (
            <div className={'canvasWrapper'}>
                <canvas
                    id="myChart"
                    className={'chart'}
                    ref={this.chartRef}
                />
            </div>
        )
    }//end of render
}//end of class

