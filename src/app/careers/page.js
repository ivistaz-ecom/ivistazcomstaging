"use client"
import React from 'react';
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { Row, Col, Button } from 'react-bootstrap'
import Header1 from '../../../components/HeaderBlack';

function page() {
  return (
    <>
<Container className="bg-black pb-5" fluid>
<Header1/>
<Container className="w-80">
<Row>
<Col lg={8}>
<h1 className="fs-21 text-white fw-bold">CAREERS</h1>
<p className="text-white para-text">iVista is looking for passionate, creative, and results-oriented individuals who are looking to master the art and performance of digital marketing. We offer a variety of opportunities for you to learn and grow, as well as the chance to work on some of the most challenging and rewarding projects in the industry. Our team is made up of experienced professionals who are dedicated to helping our clients succeed. We work with a variety of clients, from small businesses to large enterprises. We are always looking for new talent to join our team, so if you are looking for a challenging and rewarding career in digital marketing, then iVista is the place for you.</p>                  
</Col>           
</Row>
<Row>
<Col lg={6}>
<h1 className="fs-21 text-white fw-bold">GET IN TOUCH</h1>                          
<form class="row g-3 pt-4 mt-3">
<div class="mb-3">
  <label for="formFile" class="form-label">Full Name *</label>
  <input class="form-control" type="text" id="formFile"/>
                </div>
<div class="mb-3">
  <label for="formFile" class="form-label">Mobile Number *</label>
  <input class="form-control" type="text" id="formFile"/>
</div>
<div class="mb-3">
  <label for="formFile" class="form-label">Email *</label>
  <input class="form-control" type="text" id="formFile"/>
                </div>
<div class="mb-3">
  <label for="formFile" class="form-label">Job Type</label>
  <input class="form-control" type="text" id="formFile"/>
</div>
<div class="mb-3">
  <label for="formFile" class="form-label">Attach your CV</label>
  <input class="form-control" type="text" id="formFile"/>
</div> 
<div class="mb-3 text-center">                
<button type="button" class="btn btn-15">Submit</button>
</div>                  
</form>
</Col> 
<Col lg={6} className="d-flex justify-content-center align-items-center">
<Container className="iv-bg contact">
<h1 className="contact-head pb-4">iVistaz Ecom Services Pvt Ltd</h1>
                <p className="contact-text text-center">RELIAABLE PHOENIX TOWERS</p>
                <p className="contact-text text-center">4th Floor, 16 & 16/1,</p>
                <p className="contact-text text-center">Museum Road</p>
                <p className="contact-text text-center">BENGALURU, KA 560025</p>
<Container className="text-center pt-5">
              <Row className="g-0">
              <Col className="d-flex align-items-center justify-content-end">
                          <p className="footer-text">Follow Us:</p>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-start">
                          <Image src="/images/facebook.svg" width={40} height={40} className="social"/>
                          <Image src="/images/linkedin.svg" width={43} height={43} className="social"/>
                          <Image src="/images/instagram.svg" width={44} height={44} className="social"/>
                          <Image src="/images/twitter.svg" width={44} height={44} className="social"/>
                      </Col>
              </Row>    
              </Container>
</Container>
              
</Col>             
                  </Row>
<p className="para-text text-white">We value your privacy and will handle your information with utmost confidentiality. By submitting this form, you agree to our Privacy Policy.</p>                  
</Container>

</Container>
</>
  )
}

export default page
