import pic404 from "../../image/pic_404.png"

import React, { useEffect, useState } from "react";

import './Unit.css'

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

const Unit = ({ match }) => {
    // const tempdata = () => {
    // // var mydata = JSON.stringify(dataJson)
    // // console.log(dataJson)
    // Object.keys(dataJson.thread.social).map((key, i) => (
    //     console.log(key+" "+dataJson.thread.social[key].shares)
    // )
    // )
    // }
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [errorMessage, seterrorMessage] = useState(null);

    useEffect(() => {
        // console.log(match.params.id)
        // fetchProduct();
        fetch("http://159.223.77.8:4000/api/unit_back/" + match.params.id)//("http://34.132.168.173/api/unit_back/" + match.params.id)
        .then(async response => {
            const data = await response.json();
            // this.setState({loading:false})
            setLoading(false)
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            setData(data[0][0])
            // console.log(data)

            setTimeout(() => {
                setSuccess(true)
                seterrorMessage(null)
            }, 1000);

        })
        .catch(error => {
            seterrorMessage(error.toString())
            // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }, []);

    // const fetchProduct = () => {
    //     fetch("http://localhost:4000/Unit/" + match.params.id)
    //         .then(async response => {
    //             const data = await response.json();
    //             // this.setState({loading:false})
    //             setLoading(false)
    //             // check for error response
    //             if (!response.ok) {
    //                 // get error message from body or default to response statusText
    //                 const error = (data && data.message) || response.statusText;
    //                 return Promise.reject(error);
    //             }
    //             setData(data[0][0])
    //             // console.log(data)

    //             setTimeout(() => {
    //                 setSuccess(true)
    //                 seterrorMessage(null)
    //             }, 1000);

    //         })
    //         .catch(error => {
    //             seterrorMessage(error.toString())
    //             // this.setState({ errorMessage: error.toString() });
    //             console.error('There was an error!', error);
    //         });

    // };

    const onclick = () => {

        var coll = document.getElementsByClassName("collapsible");
        // var i;

        // coll[0].classList.toggle("active");
        //     var content = coll[0].nextElementSibling;
        //     if (content.style.display === "block") {
        //     content.style.display = "none";
        //     } else {
        //     content.style.display = "block";
        //     }

        coll[0].classList.toggle("active");
        var content = coll[0].nextElementSibling;
        // console.log(content.scrollHeight)
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
        <div>

            {!success ?
                (

                    errorMessage == null ?
                        (<div style={{ display: "flex" }}>
                            {loading ?
                                <Lottie options={defaultLoading} height={140} width={140} /> :
                                <Lottie options={defaultSuccess} height={140} width={140} />
                            }
                        </div>) :
                        (
                            <div style={{ textAlign: 'center' }}>
                                <h1>SORRY!</h1>
                                <p >Server down</p>
                                <p>Please contact (kantawit sakhet 082-8834901 )</p>
                            </div>
                        )


                ) :
                (



                    data ?
                        (
                            <div className='container-unit'>
                                <h1>{data.title} </h1>
                                {/* <div className="p-2"> <Graphs dataJson/> </div> */}

                                <div className="row-outer-unit">

                                    <div className='row-inner-unit'>
                                        <img src={data.link_img} onError={(e) => { e.target.onerror = null; e.target.src = pic404 }}
                                            style={{ width: 400, height: 400 }}
                                        />
                                    </div>

                                    <div className="container-DetailPic-unit">
                                        <p style={{ position: 'absolute' }}>UUID: </p>
                                        <p style={{ fontSize: '80%', marginTop: '12%', textAlign: 'center' }}>{data.uuid}</p>

                                        <p style={{ position: 'absolute' }}>country: </p>
                                        <p style={{ marginTop: '11%', textAlign: 'center' }}> {data.country} </p>

                                        <p style={{ position: 'absolute' }} >published</p>
                                        <p style={{ marginTop: '12%', textAlign: 'center' }}> {data.published.split("T")[0]} </p>

                                        <div style={{ marginTop: '12%', textAlign: 'center' }}>
                                            <a href={data.url}> link </a>

                                        </div>

                                    </div>

                                </div>

                                <div>
                                    <button type="button" className="collapsible" onClick={onclick}>Open Text</button>
                                    <div className="content">
                                        <p>{data.text}</p>

                                    </div>
                                </div>

                            </div>
                        ) :
                        (
                            <div style={{ textAlign: 'center' }}>
                                <h1>SORRY!</h1>
                                <p >We don't have that data.</p>
                            </div>

                        )

                )
            }



        </div>





    )
}

export default Unit
