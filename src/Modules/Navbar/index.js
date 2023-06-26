import React from 'react';
import logo from '../../images/Logo.png'
import ct from '../../images/CT.png'

import './index.css'
const Navbar = ({}) => (
    <div className='navbar'>
        <div className='logoDiv'>
            <img src={logo} alt='Logo' className='logoPhoto'></img>
        </div>
        <div className='complianceTrackerDiv'>
        <img src={ct} alt='Logo' className='complianceTrackerPhoto'></img>
        </div>
        <h4 className='welcome'>
            Welcome Bharuch Admin !
        </h4>
        <div className='profileCircle'>
                hii
        </div>
    </div>
);

export default Navbar