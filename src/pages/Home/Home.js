import { React } from 'react'

import './Home.css'

// import Graphs from '../Graphs/Graphs';

// หน้านี้ไว้ แสดงค่ารวม เช่น จำนวนข่าวทั้งหมด และประเถทของข่าวต่อช่วงเวลา
const Home = () => {
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



        </div>
       
    )
}

export default Home
