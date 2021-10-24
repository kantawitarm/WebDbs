import React, {useState, useEffect, Component} from 'react';

import Button from '@restart/ui/esm/Button';

import CanvasJSReact from "../../lib/canvasjs-3.4.2/canvasjs.react";//"./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graphs = () => {

    // useEffect(()=>{ // ช่วงเริ่มต้น code รันรอบเดียว
    //     // addData(tempD)
    //     // inintdata()
    // }, []) 

    var tempD = [
        // { label: "Apple", y: 10 },
        // { label: "Orange", y: 15 },
        // { label: "Banana", y: 25 },
        // { label: "Mango", y: 30 },
        // { label: "Grape", y: 28 }
    ]

    // let dataShow = []; // [ { label: "Apple", y: 10 }, {...}]
    const [dataShow,setDataShow] = useState([]);

    const addData = (newData) =>{
        // const newTask = {task}
        setDataShow([...dataShow, newData])
    }

    const addDataReal = (newData) => {

        tempD.push({ label: "Grape", y: 28 })
    }

    const options = {
        title: {
            text: "Basic Column Chart in React"
        },
        data: [{
            type: "column",
            dataPoints: tempD
            
        }]
    }

    // const inintdata = async () => {
    //     // console.log(typeof(tempD))
    //     // await addData(tempD)
    //     // for(let i = 0; i < tempD.length; i++) {
    //     //     console.log(tempD[i].label)
    //     //     addData({ label: tempD[i].label, y: tempD[i].y })
    //     //     console.log("----")
    //     //   }

    //     // const test = tempD.map((label, y) => (
    //     //     console.log(label + " " + y)
    //     // ))
    //     // Object.keys(dataShow).map((i) => (
    //     //     console.log(dataShow[i])

            
    //     //     // addData({ label: key, y: i })
    //     // ))

    //     // console.log(dataShow)
    // }

    addDataReal()

    return (

            <div style={{ width: "400px", margin: "40px", flex:1}}>
                <CanvasJSChart options={options}
                /* onRef = {ref => this.chart = ref} */
                />
            
            
            </div>
            
    )
}

export default Graphs
