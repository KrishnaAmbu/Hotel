import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Userview from './components/Userview';
import {Grid,Card,CardContent,Typography} from "@mui/material"
import Container from '@mui/material';
import Try from './components/Try';
import Homee from './components/Homee'

function App() {
  return (
    <div className="App">
    <Home />
    {/* <Navbar/> */}
    {/* < Userview /> */}
    <Try/>
    <Homee />
    
    </div>
  );
}

export default App;
