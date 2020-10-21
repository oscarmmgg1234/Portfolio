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
                labels: ["C++", "Javascript", "Python"],
                datasets: [
                    {
                        label: "Core Skills",
                        data: [86, 67, 91],
                    }
                ]
            },
            options: {
                //Customize chart options
                color: [
                'red',
                'blue',
                'green'
 ]           }
        });
    }
    render() {
        return (
            <div className="aboutContainer"><canvas id="myChart" width="400" height="400"></canvas>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
