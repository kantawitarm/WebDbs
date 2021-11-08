import React from 'react'

import CanvasJSReact from "../../lib/canvasjs-3.4.2/canvasjs.react";

import Lottie from "react-lottie";
import * as loadingData from "../LoadingAnimation/loading.json";
import * as successData from "../LoadingAnimation/success.json";




var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const defaultLoading = {
    loop: true,
    autoplay: true,
    animationData: loadingData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const defaultSuccess = {
    loop: true,
    autoplay: true,
    animationData: successData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};


export default class G_YearPerUnit extends React.Component {

    constructor() {
        super();
        this.generateDataPoints = this.generateDataPoints.bind(this);
    }

    state = {
        success: false,
        loading: true,
        dataGraph: null,
    }

    async componentDidMount() {

        fetch("http://159.223.77.8:4000/api/graph_back")//("http://34.132.168.173/api/graph_back")
        .then(async response => {
            const data = await response.json();
            this.setState({loading:false})
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            this.setState({ dataGraph: data, errorMessage: null })
            setTimeout(() => {
                        this.setState({ success: true });
                    }, 1000); 
            
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
        
    }

    generateDataPoints = (G_data) => {
        var dps = [];
        if (this.state.success) {

            // console.log('[  G_log   ]' + G_data[0][1].date.split('T')[0])
            for (var i = 0; i < Object.keys(G_data[0]).length; i++) {
                dps.push({ x: new Date(G_data[0][i].date), y: G_data[0][i].unit })
            }

        }

        return dps;
    }


    render() {

        const options = {
            exportEnabled: true,
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

                {!this.state.success ?
                    (
                       this.state.errorMessage == null ?
                        (<div style={{ display: "flex" }}>
                            {this.state.loading ?
                                <Lottie options={defaultLoading} height={140} width={140} /> :
                                <Lottie options={defaultSuccess} height={140} width={140} />
                            }
                        </div>):
                        (
                            <div style ={{textAlign: 'center'}}>
                            <h1>SORRY!</h1>
                            <p >Server down</p>
                            <p>Please contact (kantawit sakhet 082-8834901 )</p>
                            </div>
                        )

                        


                    ) :
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
