import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration:2000
});
const Landingscreen = () => {
    return (
        <div className='row laniding justify-content-center' style={{marginRight: "0px",  marginLeft: "0px"}} >
      
            <div style={{borderRight:'8px solid white'}} className='col-md-9 my-ato text-center landing_part'>

                <h3 data-aos='zoom-in' style={{color:'white'}}>Task</h3>
                <h1 data-aos='zoom-out' style={{color:'white'}}>"There is Only one .The Guest</h1>


                <Link to='/home'>
                    <button className='btn landingbtn' style={{color:'black'}}>Get Started</button>
                </Link>

            </div>
            
        </div>
    );
};

export default Landingscreen;