import React from 'react';

import { Nav } from 'react-bootstrap';

import logoBlack from '../../assets/images/logoBlack.png';

const Footer = () => {


    return (
        <>
         <div className='row d-flex justify-content-between mt-5=3'>
            <div className='col-md-12 col-lg-4 ml-3 footer-first mb-3'>
                <img src={logoBlack} alt="logo" width="100"/>
                <p className='mt-3 footer-first_text'>
                    Social media validation business model canvas graphical
                     user interface launch party creative facebook iPad twitter.
                </p>
                <p className='mt-4'>
                    All rights reserved.
                </p>
            </div>

            <div className='col-md-12 col-lg-7 d-flex ml-3 justify-content-between mb-3'>
                <div className='d-flex flex-column'>
                    <h4 className='mb-3'>Landings</h4>
                    <div style={{cursor:'pointer'}}>
                        <p className='mb-3'>Home</p>
                        <p className='mb-3'> Products</p>
                        <p>Services</p>
                    </div>
                    
                </div>

                <div className='d-flex flex-column'>
                    <h4 className='mb-3'>Company</h4>
                    <p className='mb-3'> Home </p>
                    <p className='mb-3'> 
                    <span>Careers</span>
                    <span className="badge badge-success ml-3">Hiring</span>
                    </p>
                    <p>Services</p>
                </div>

                <div className='d-flex flex-column'>
                    <h4 className='mb-3'>Resources</h4>
                    <p className='mb-3'> Blog </p>
                    <p className='mb-3'> Products</p>
                    <p>Services</p>
                </div>

            </div>

         </div>
        </>
    )

}

export default Footer;