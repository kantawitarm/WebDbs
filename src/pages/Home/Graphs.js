import React, { Component } from "react";

import { render } from "react-dom";
import CanvasJSReact from "../../lib/canvasjs-3.4.2/canvasjs.react";//"./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graphs = () => {

    const options = {
        title: {
            text: "Basic Column Chart in React"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Apple", y: 10 },
                { label: "Orange", y: 15 },
                { label: "Banana", y: 25 },
                { label: "Mango", y: 30 },
                { label: "Grape", y: 28 }
            ]
        }]
    }


    return (

            <div style={{ width: "300px", margin: "30px", flex:1}}>
                <CanvasJSChart options={options}
                /* onRef = {ref => this.chart = ref} */
                />
            </div>
    )
}

export default Graphs
