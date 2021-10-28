import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import file
import MyNavbar from './components/MyNavbar';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home/Home"
import Unit from "./pages/Unit/Unit"
import Graphs from './pages/Graphs/Graphs';
import Table from './pages/Table/Table';

import React, {useState, useEffect, Component} from 'react';

//Arm section
function App() {
  // const [dataGraph, setDataGraph] = useState([])

  

  // useEffect(() => {
  //   const getDateGraph= async () => {
  //     const dateGraphFromServer = await fetchDateGraph()
  //     setDataGraph(dateGraphFromServer)
  //   }

  //   getDateGraph()
  // }, [])

    // Fetch Tasks
    // const fetchDateGraph = async () => {
    //     const res = await fetch('http://localhost:4000/Graph')
    //     const data = await res.json()
    //     console.log(typeof(data[0][0]))
    //     // console.log()
    //     return data
    // }



  return (
    <Router>
      <div className="Home-Back" > {/* ต้อง กำหนดค่า กึ่งกลางที่ตัวใหญ่ ตัวคลุม  style={{ textAlign: "center" }}*/}
  
        <MyNavbar />

        <Switch>
          <div style ={{position: 'static'}}>
                <Route path="/" component={Home} exact/>

                <Route path="/Unit/:id" component={Unit} exact/>
                {/* <Route exact path="/post/:id" render={({match}) => (
                    <Unit match ={window.location.pathname} />
                  )} /> */}

                <Route path="/Graphs" component={Graphs} exact/>
                <Route path="/Table" component={Table} exact/>
          </div>
        </Switch>

      </div>
    </Router>

  );
  
}

export default App;
