"use client"
import React from 'react'
import Header1 from '../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import Link from 'next/link';
import Image from 'next/image'
function page() {
  return (
<>
<Container fluid className="bg-black">
              <Header1 />
              <Container className="w-80">
            <h1 className="text-white fs-70 fw-bold">MASTERY</h1>                   
              </Container>

              <Container className="w-80">
                  <Row>
                      <Col>
                          <p className="mastery-text">Years of Experience & Expertise</p>
                          <p className="mastery-text">Clients Served</p>
                          <h2 className="matery-title">Online Revenue Generated</h2>
                          <p className="mastery-text">Marketing Qualified Leads (MQLs) delivered</p>
                          <p className="mastery-text">Websites Designed and Developed</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                          <CountUp end={574}
                              prefix="+"
                              className="counter"
                          />
                      </Col>
              </Row>
              </Container> 
              
              <Container className="w-80">
                  <Row>
                      <Col className="overflow">
                    <img src="/images/mastery.svg" className="master-img"/>
                      </Col>
                      <Col className="">
                      <p className="mastery-text">“Mastery demands all of a person.” – Albert Einstein</p>
                        <p className="mastery-text">Years of being in the digital marketing landscape and working with over 300+ clients has given us insights on how to master every aspect of this dynamic industry. Want to know how we do it?</p>
                        <Container className="mt-3 pb-5 margin-left">
                          <Link href="/mastery/about-us" className="btn btn-13 b-width">About Us</Link>
                          <Link href="/mastery/solutions" className="btn btn-14 mx-5">Solutions</Link>
                          </Container>              
                          <Container className="mt-5 margin-left">
                          <Link href="/arts" className="text">ART</Link>
                          <Link href="/performance" className="text mx-5">PERFORMANCE</Link>    
                          </Container>
                      </Col>
              </Row>
              </Container> 

</Container>
    </>
  )
}

export default page