import React from 'react';


import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

import hero from '../../assets/images/hero.svg'
import logos from '../../assets/images/logos.svg'

const HeaderTab = () => {
  return (
    <Container fluid className="headerTab m-0 h-100 text-white">
                  <ToastContainer style={{zIndex:999999}} limit={1} />

        <div className="d-flex row p-3">
            <div  className="col-lg-6 align-self-center firstHalf">
                <h2 className="mb-2">
                    Save time by building  fast with Boldo Template 
                </h2>
                <p>
                    Funding handshake buyer business-to-business metrics iPad
                     partnership. First mover advantage innovator success deployment 
                     non-disclosure.
                </p>
                <div className="mt-5">
                    <button  onClick={() =>toast.success("Buy template clicked")} className="btn radius btn-outline-secondary text-dark mr-4 px-4 font-weight-bold template">
                        Buy template
                    </button>
                    <button  onClick={() =>toast.success("Explore more clicked")}   className="btn border btn-outline-secondary radius text-white border-white px-5 font-weight-bold"> 
                        Explore
                    </button>
                </div>
            </div>
            <div style={{zIndex:99999}} className="col-lg-6 align-self-center d-flex secondHalf img-change">
                <img src={hero}  className="images ml-auto img-change"   alt=" frame image"/>
            </div>
        </div>
        <div className="text-center">
            {/* couldn't export exact image */}
            {/* <img src={logos} /> */}
        </div>
    </Container>
  );
};

export default HeaderTab;