import React from 'react'

// import Graphs from './G_data'
import G_DatePerUnit from './G_DatePerUnit'

import './Graphs.css'



export default class Graph extends React.Component{
    

    render(){
        return (
            <div className='container-Graphs'>
    
                <div className='container-Graph'>
                    <G_DatePerUnit />
                </div>
    
                {/* <div className="d-flex flex-row">
                        <div className="p-2"> <Graphs/> </div>
                        <div className="p-2"> <Graphs/> </div>
                        <div className="p-2">Flex item 3</div>
                </div> */}
    
            </div>
        );

    }
    
}
