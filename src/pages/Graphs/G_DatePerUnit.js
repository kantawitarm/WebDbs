import React, { useState, useEffect, Component } from 'react'

import CanvasJSReact from "../../lib/canvasjs-3.4.2/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const G_YearPerUnit = (dataGraph) => {
export default class G_YearPerUnit extends React.Component {

    constructor() {
        super();
        this.generateDataPoints = this.generateDataPoints.bind(this);
    }

    state = {
        loading: true,
        dataGraph: null,
    }

    async componentDidMount() {
        const url = "http://localhost:4000/graph";
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        await this.setState({ dataGraph: data, loading: false });
    }

    generateDataPoints = (G_data) => {
        var dps = [];
        if (!this.state.loading) {

            // console.log('[  G_log   ]' + G_data[0][1].date.split('T')[0])
            for (var i = 0; i < Object.keys(G_data[0]).length; i++) {
                dps.push({ x: new Date(G_data[0][i].date), y: G_data[0][i].unit })
            }

        }

        return dps;
    }


    render() {

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
                valueFormatString: "DD MMM",
                // logarithmic: true
            },
            data: [{
                type: "column",// area
                xValueFormatString: "DD MMM",
                dataPoints: this.generateDataPoints(this.state.dataGraph)
            }]
        }


        return (
            <div >
                {this.state.loading || !this.state.dataGraph ?
                    <div>
                        <p > loading ...</p>
                    </div> :
                    <div>
                        <CanvasJSChart options={options}
                    /* onRef={refÎ => this.chart = ref} */ />
                    </div>
                }

            </div>
        );

    }

}

// export default G_YearPerUnit
