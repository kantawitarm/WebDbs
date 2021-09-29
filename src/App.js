import './App.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

//import file
import MyNavbar from './components/MyNavbar';
import Graphs from './components/Graphs';


//Arm section
function App() {
  return (
    <div style={{textAlign: "center"}} className="Home-Back"> {/* ต้อง กำหนดค่า กึ่งกลางที่ตัวใหญ่ ตัวคลุม */}
    <MyNavbar/>
    <Graphs/>
    <Button variant="primary">Button #1</Button>

    </div>

  );
}

export default App;
