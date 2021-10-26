import Button from '@restart/ui/esm/Button';
import { React, View } from 'react'
import { Form } from 'react-bootstrap';

import './Home.css'

// import Graphs from '../Graphs/Graphs';

// หน้านี้ไว้ แสดงค่ารวม เช่น จำนวนข่าวทั้งหมด และประเถทของข่าวต่อช่วงเวลา
const Home = () => {
    const onSubmit = (e) => {

        console.log("Ahhhhhh")
    }
    return (
       
        <div className='container-home'>
            <div style={{paddingTop:'4%'}}>
                <h1 className='text-home'>News & Blog</h1>
                <h1 className='text-home'>Articles</h1>
            </div>
            
            <div style={{paddingTop: '2%'}}> 
                <h3 className='text-quote'>The evening news is a concept </h3>
                <h3 className='text-quote'>whose time has come and gone.</h3>

                <div style={{paddingTop: '1%'}}>
                <h3 style={{fontSize:'18px'}} className='text-quote'>Bernard Goldberg</h3>
                </div>
                
                


            </div>



            {/* <p>XDDDDD</p> style={{position:'absolute', bottom: '0', left:'0', paddingBottom: '8%'}} */  }

            <>
                {/* <div className="d-flex flex-row">
                    <div className="p-2"> <Graphs/> </div>
                    <div className="p-2"> <Graphs/> </div>
                    <div className="p-2">Flex item 3</div>
                </div>
               
                <Button onClick={onSubmit}>Hit me hardddd</Button> */}
                
                
            </>

        </div>
       
    )
}

export default Home
