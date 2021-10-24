import Button from '@restart/ui/esm/Button';
import { React, View } from 'react'
import { Form } from 'react-bootstrap';


import Graphs from './Graphs';

// หน้านี้ไว้ แสดงค่ารวม เช่น จำนวนข่าวทั้งหมด และประเถทของข่าวต่อช่วงเวลา
const Home = () => {
    const onSubmit = (e) => {

        console.log("Ahhhhhh")
    }
    return (
        <div>
            <h1>Test Home</h1>
            <p>XDDDDD</p>

            <>
                <div className="d-flex flex-row">
                    <div className="p-2"> <Graphs/> </div>
                    <div className="p-2"> <Graphs/> </div>
                    <div className="p-2">Flex item 3</div>
                </div>
               
                <Button onClick={onSubmit}>Hit me hardddd</Button>
                
            </>

        </div>
    )
}

export default Home
