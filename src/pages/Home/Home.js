import { React, View } from 'react'


import Graphs from './Graphs';

const Home = () => {
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
            </>

        </div>
    )
}

export default Home
