import React from 'react'

import CanvasJSReact from "../../lib/canvasjs-3.4.2/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const G_YearPerUnit = () => {

    const generateDataPoints = (noOfDps) => {
		var xVal = 1, yVal = 100;
		var dps = [];
		for(var i = 0; i < noOfDps; i++) {
			yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
			dps.push({x: xVal,y: yVal});	
			xVal++;
		}
		return dps;
	}

    const options = {
        theme: "light2", // "light1", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Value",
            // logarithmic: true
        },
        axisX: {
            title: "Time(year)",
            // logarithmic: true
        },
        data: [{
            type: "area",
            dataPoints: generateDataPoints(500)
        }]
    }
    return (
        <div >
            <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} *//>
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    )
}

export default G_YearPerUnit
