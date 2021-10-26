import React from 'react'

import Graphs from './G_data'
import G_YearPerUnit from './G_YearPerUnit'

import './Graphs.css'

const Graph = () => {
    return (
        <div className ='container-Graphs'>

            <div className='container-Graph'>
                <G_YearPerUnit/>
            </div>

            {/* <div className="d-flex flex-row">
                    <div className="p-2"> <Graphs/> </div>
                    <div className="p-2"> <Graphs/> </div>
                    <div className="p-2">Flex item 3</div>
            </div> */}

        </div>
    )
}

export default Graph
