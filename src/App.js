import './App.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

//import file
import MyNavbar from './components/MyNavbar';


//Arm section
function App() {
  return (
    <div className="App">
    <MyNavbar/>
    <Button variant="primary">Button #1</Button>

    </div>

  );
}

export default App;
