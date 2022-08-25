import React from "react";

import images from '../assets/image'
import cooperate from "../assets/images/cooperate.svg"




import Card from "../components/elements/card";
import { Accordion } from "react-bootstrap";
import EmailTemplate from "../components/elements/emailTemplate";
import { toast } from "react-toastify";

const Main: React.FC = () => {

    console.log(images)
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
              image={images[0]} //walk
            />
          </div>

          <div className="d-flex card-section  col-md-12 col-lg-3">
            <Card
              title="Even cooler feature"
              content="Learning curve network effects return on investment."
              image={images[1]} //friendship
            />
          </div>

          <div className="d-flex card-section col-md-12 col-lg-3 mb-5">
            <Card
              title="Cool feature title"
              content="Learning curve network effects return on investment."
              image={images[2]} //imagine
            />
          </div>
        </div>
        <div className="row d-flex justify-content-between mt-5 p-5">
          <div className="col-md-12 col-lg-5 text-center">
            <img src={images[3]} width="50%" /> 
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
              <button onClick={() =>toast.success("Start now clicked")}  style={{width:'25%'}} className="btn btn-outline-secondary border-dark py-2 bg-dark rounded text-white font-weight-bold start-now">
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
            <img src={images[4]} width="50%" />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#0A2640" }} className="p-0 mb-5">
        <div className="p-5">
          <h4 style={{width:'50'}} className="text-white">
            An enterprise template to ramp up your company website
          </h4>
          <div style={{cursor:'pointer'}}  className="d-flex justify-content-end">
            <i className="fa fa-arrow-left text-dark bg-white border rounded-circle p-3 mr-4"></i>
            <i className="fa fa-arrow-right text-dark bg-white border rounded-circle p-3"></i>
          </div>
        </div>
        {/* flex-column
        w-50 */}
        <div className="mb-5 row d-flex justify-content-evenly align-content-center inner-content">
            <div className="card col-md-12 col-lg-2 align-self-start mb-3 inner-content_div">
                <div className="card-body">
                    <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="d-flex inner-content_div_text">
                        <img src={images[5]} width="20%" className="align-self-center" /> 
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
                        <img src={images[6]} width="20%" className="align-self-center"  /> 
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
                            <img src={images[6]} width="20%" className="align-self-center" /> 
                            <div className="d-flex flex-column align-self-center ml-2">
                                <p className="p-0 m-0 font-weight-bold">Harry Porter</p>
                                <small style={{fontSize:'10px'}}>Team Leader @ Gryffindor</small>
                            </div>
                        </div>
                </div>
            </div> 
        
        </div>
      </div>
      <div className="p-5 d-flex flex-column">
        <div className="m-auto">
            <img src={cooperate} width="100%"/>
        </div>
        <div style={{padding:'0 5rem'}} className="row d-flex justify-content-between m-auto mt-5 accordion">
            <h4 className="col-md-12 col-lg-4">We connect our customers with the best, and help them keep up-and stay open.</h4>
            <Accordion className="col-md-12 col-lg-5" defaultActiveKey="0" flush>
                <Accordion.Item className="" eventKey="0">
                    <Accordion.Header>We connect our customers with the best?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="" eventKey="1">
                    <Accordion.Header>Android research & development rockstar? </Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
      </div>
      <div className="mb-3 mt-4 p-4">
        <p className="text-center mb-3">Our Blog</p>
        <h4 className="m-auto w-50 main-text mb-5 text-center">
            Value proposition accelerator product management venture
        </h4>
        <div className="row d-flex justify-content-around align-items-center">
          <div className="d-flex card-section col-md-12 col-lg-3">
            <Card
              title="Category"
              mutedTitle=" November 22, 2021"
              content="Pitch termsheet backing validation focus release."
              image={images[0]} //walk
              withImage
              imageName="Chandler Bing"
              image2={images[10]} //bing
            />
          </div>

          <div className="d-flex card-section  col-md-12 col-lg-3">
            <Card
              title="Category"
              mutedTitle=" November 22, 2021"
              content="Seed round direct mailing non-disclosure agreement graphical user interface rockstar.."
              image={images[1]} //friendship
              withImage
              imageName="Rachel Green"
              image2={images[9]} //green
            />
          </div>

          <div className="d-flex card-section col-md-12 col-lg-3">
            <Card
              title="Category"
              mutedTitle=" November 22, 2021"
              content="Beta prototype sales iPad gen-z marketing network effects value proposition."
              image={images[2]} //imagine
              withImage
              imageName="Monica Geller"
              image2={images[8]} //monia
            />
          </div>
        </div>
        <div className="text-center mt-3">
            <button onClick={() =>toast.success("Learn more clicked")}  type="button" className="px-4 btn border-dark btn-outline-secondary font-weight-bold bg-white text-dark mb-3 radius">Learn More</button>
        </div>
        <div style={{padding:'1rem'}} className="adjustInput">
            <EmailTemplate />
        </div>
    </div>
    </>
  );
};

export default Main;
