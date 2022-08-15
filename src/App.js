import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homescreen from './screens/Homescreen';

import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

import Adminscreen from './screens/Admin/Adminscreen';
import Landingscreen from './screens/Landingscreen';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/home" element={<Homescreen />} />
     
          <Route exact path="/register" element={<Registerscreen />} />
          <Route exact path="/login" element={<Loginscreen />} />
     
          <Route exact path="/admin" element={<Adminscreen />} />
          <Route exact path="/" element={<Landingscreen />} />
          





        </Routes>
      </Router>
    </div>
  );
}

export default App;
