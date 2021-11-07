import React from 'react'

import CanvasJSReact from "../../lib/canvasjs-3.4.2/canvasjs.react";

import Lottie from "react-lottie";
import * as loadingData from "../LoadingAnimation/loading.json";
import * as successData from "../LoadingAnimation/success.json";

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


var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const Piechart = () => {
export default class Piechart extends React.Component {

    constructor() {
        super();
        this.generateDataPoints = this.generateDataPoints.bind(this);
    }

    state = {
        success: false,
        loading: true,
        dataPiechart: null,
    }


    async componentDidMount() {

        fetch("")//("http://34.132.168.173/api/piechart_back")
        .then(async response => {
            const data = await response.json();
            this.setState({loading:false})
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            this.setState({ dataPiechart: data, errorMessage: null })
            setTimeout(() => {
                        this.setState({ success: true });
                    }, 1000); 
            
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
        
    }

    generateDataPoints = (Piedata) => {
        var dps = [];
        if (this.state.success) {

            // console.log(Piedata[0])
            let sum =0;
            for (var i = 0; i < Object.keys(Piedata[0]).length; i++) {
                sum = sum + Piedata[0][i].count
            }



            for (var i = 0; i < Object.keys(Piedata[0]).length; i++) {
                dps.push({ y: parseFloat((Piedata[0][i].count / sum)*100).toFixed(2), label: Piedata[0][i].type })
            }



        }

        return dps;
    }




    render(){

        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light1",//"dark2", // "light1", "dark1", "dark2"
            title:{
                text: "NEWS & BLOGS"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y} %",		
                startAngle: -90,
                dataPoints: this.generateDataPoints(this.state.dataPiechart)
            }]
        }
    

        return (
            <div>
     
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
                 <CanvasJSChart options = {options} 
                     /* onRef={ref => this.chart = ref} */
                 />
              }
     
     
             </div>
         )

    }

    
}

// export default Piechart
