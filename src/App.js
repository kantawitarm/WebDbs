import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import file
import MyNavbar from './components/MyNavbar';

// import { BrowserRouter, Router } from 'react-router-dom'

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home/Home"
import Test from "./pages/Test/Test"

//Arm section
function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }} className="Home-Back"> {/* ต้อง กำหนดค่า กึ่งกลางที่ตัวใหญ่ ตัวคลุม */}
        <MyNavbar />

        <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/test" component={Test} exact/>

        </Switch>

      </div>
    </Router>

  );
}

export default App;
