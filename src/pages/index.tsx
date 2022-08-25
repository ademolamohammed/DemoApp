import React from "react";

import walk from "../assets/images/walk.svg";
import friendship from "../assets/images/friendship.svg";
import imagine from "../assets/images/imagine.svg";

import income from "../assets/images/income.svg";
import agile from "../assets/images/agile.svg";

import albus from "../assets/images/albus.svg";
import potter from "../assets/images/potter.svg";
import snap from "../assets/images/snap.svg";




import Card from "../components/elements/card";

const Main: React.FC = () => {
  return (
    <>
      <div className="mb-3 p-4">
        <p className="text-center mb-3">Our Services</p>
        <h4 className="m-auto w-50 main-text mb-5 text-center">
          Handshake infographic mass market crowdfunding iteration.
        </h4>
        <div className="row d-flex justify-content-around align-items-center">
          <div className="d-flex card-section col-md-12 col-lg-3">
            <Card
              title="Cool feature title"
              content="Learning curve network effects return on investment."
              image={walk}
            />
          </div>

          <div className="d-flex card-section  col-md-12 col-lg-3">
            <Card
              title="Even cooler feature"
              content="Learning curve network effects return on investment."
              image={friendship}
            />
          </div>

          <div className="d-flex card-section col-md-12 col-lg-3 mb-5">
            <Card
              title="Cool feature title"
              content="Learning curve network effects return on investment."
              image={imagine}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-between mt-5 p-5">
          <div className="col-md-12 col-lg-5 text-center">
            <img src={income} width="50%" />
          </div>
          <div className="col-md-12 col-lg-5 d-flex flex-column align-self-center income-text">
            <h4 style={{ width: "75%" }} className="mb-4 income-text_header">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h4>
            <div>
              <div className="mb-4">
                <i
                  className="fa fa-check-circle mr-4 fa-lg "
                  aria-hidden="true"
                ></i>
                <small>We connect our customers with the best.</small>
              </div>
              <div className="mb-4">
                <i
                  className="fa fa-check-circle mr-4 fa-lg"
                  aria-hidden="true"
                ></i>
                <small>Advisor success customer launch party.</small>
              </div>
              <div className="mb-4">
                <i
                  className="fa fa-check-circle mr-4 fa-lg"
                  aria-hidden="true"
                ></i>
                <small>Business-to-consumer long tail. </small>
              </div>
              <button className="btn border-dark w-25 py-2 bg-dark rounded text-white  font-weight-bold">
                <small>Start Now</small>
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between p-5 mb-3">
          <div className="col-md-12 col-lg-5 d-flex flex-column align-self-center agile">
            <h4 className="w-75 mb-4">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h4>
            <div className="card mb-3 h-100">
              <div className="card-body bg-dark text-white">
                <i
                  className="fa fa-leaf text-white mr-3"
                  aria-hidden="true"
                ></i>
                <small>We connect our customers with the best.</small>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body text-dark">
                <i className="fa fa-eye text-dark mr-3" aria-hidden="true"></i>
                <small>We connect our customers with the best.</small>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body text-dark">
                <i className="fa fa-sun text-dark mr-3" aria-hidden="true"></i>
                <small>We connect our customers with the best.</small>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 text-center">
            <img src={agile} width="50%" />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#0A2640" }} className="p-0 mb-5">
        <div className="p-5">
          <h4 className="w-50 text-white">
            An enterprise template to ramp up your company website
          </h4>
          <div className="d-flex justify-content-end">
            <i style={{cursor:'pointer'}} className="fa fa-arrow-left text-dark bg-white border rounded-circle p-3 mr-4"></i>
            <i style={{cursor:'pointer'}}  className="fa fa-arrow-right text-dark bg-white border rounded-circle p-3"></i>
          </div>
        </div>
        {/* flex-column
        w-50 */}
        <div className="mb-5 row d-flex justify-content-evenly align-content-center inner-content">
            <div className="card col-md-12 col-lg-2 align-self-start mb-3 inner-content_div">
                <div className="card-body">
                    <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="d-flex inner-content_div_text">
                        <img src={albus} width="20%" className="align-self-center" /> 
                        <div className="d-flex flex-column align-self-center ml-2">
                            <p className="p-0 m-0 font-weight-bold">Albus Dumbledore</p>
                            <small style={{fontSize:'10px'}}>Manager @ Howarts</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card col-md-12 col-lg-2 align-self-stretch mb-3 inner-content_div">
                <div className="card-body">
                    <p className="card-text mb-3 p-2">“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor. ”</p>
                    <div className="d-flex inner-content_div_text">
                        <img src={snap} width="20%" className="align-self-center"  /> 
                        <div className="d-flex flex-column align-self-center ml-2">
                            <p className="p-0 m-0 font-weight-bold">Severus Snape</p>
                            <small style={{fontSize:'10px'}}>Manager @ system</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card col-md-12 col-lg-2 align-self-start mb-3 inner-content_div">
                <div className="card-body">
                        <p className="card-text mb-3">“Release facebook responsive web design business model canvas seed money monetization.”</p>
                        <div className="d-flex inner-content_div_text">
                            <img src={potter} width="20%" className="align-self-center" /> 
                            <div className="d-flex flex-column align-self-center ml-2">
                                <p className="p-0 m-0 font-weight-bold">Harry Porter</p>
                                <small style={{fontSize:'10px'}}>Team Leader @ Gryffindor</small>
                            </div>
                        </div>
                </div>
            </div> 
        
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default Main;
