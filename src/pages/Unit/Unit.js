import React from 'react';

import dataJson from "../../Tempdata/blogs_0000012.json";
import pic404 from "../../image/pic_404.png"
import Graphs from './Graphs';

import './Unit.css'

const Unit = (props) => {
    // const tempdata = () => {
    // // var mydata = JSON.stringify(dataJson)
    // // console.log(dataJson)
    // Object.keys(dataJson.thread.social).map((key, i) => (
    //     console.log(key+" "+dataJson.thread.social[key].shares)
    // )
    // )
    // }

    const onclick = () => {

        var coll = document.getElementsByClassName("collapsible");
        var i;

        // coll[0].classList.toggle("active");
        //     var content = coll[0].nextElementSibling;
        //     if (content.style.display === "block") {
        //     content.style.display = "none";
        //     } else {
        //     content.style.display = "block";
        //     }

        coll[0].classList.toggle("active");
        var content = coll[0].nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

        // for (i = 0; i < coll.length; i++) {

        //     coll[i].classList.toggle("active");
        //     var content = coll[i].nextElementSibling;
        //     if (content.style.display === "block") {
        //     content.style.display = "none";
        //     } else {
        //     content.style.display = "block";
        //     }
        // };
    }





    // console.log(dataJson.thread.published.split("T")[0])
    // console.log(dataJson.uuid)
    // tempdata()
    return (
        <div className='container-unit'>
            <h1>{dataJson.title} </h1>
            {/* <div className="p-2"> <Graphs dataJson/> </div> */}

            <div className="row-outer-unit">

                <div className='row-inner-unit'>
                    <img src={dataJson.thread.main_image} onError={(e) => { e.target.onerror = null; e.target.src = pic404 }}
                        style={{ width: 400, height: 400 }}
                    />
                </div>

                <div className="container-DetailPic-unit">
                    <p style={{position:'absolute'}}>uuid: </p>
                    <p style = {{fontSize: '80%', marginTop: '9%'}}>{dataJson.uuid}</p>

                    <p style = {{position:'absolute'}}>country: </p>
                    <p style ={{marginTop: '9%'}}> {dataJson.thread.country} </p>

                    <p style={{position:'absolute'}} >published</p>
                    <p style ={{marginTop: '10%'}}> {dataJson.thread.published.split("T")[0]} </p>

                </div>

            </div>

            <div>
                {
                    <a href={dataJson.thread.url}> link </a>
                }
            </div>
            <div>
                <button type="button" class="collapsible" onClick={onclick}>Open Text</button>
                <div class="content">
                    <p>{dataJson.text}</p>

                </div>


            </div>

        </div>
    )
}

export default Unit
