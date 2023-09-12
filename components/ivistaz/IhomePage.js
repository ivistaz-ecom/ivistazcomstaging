"use client"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Header from '../HeaderBlack'
import CountUp from 'react-countup';

function IhomePage () {

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  
}


  return (            
<Container className="bg-black h-100vh" fluid>
<Header/>
<Row className="d-flex flex-column align-items-center" style={{height:500+'px'}}>
<Col className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-white fs-80 fw-bold">
          <CountUp end={26}
                              prefix=""
              className="years"
              suffix=" YEARS"
                          /></h2>
          <h2 className="text-white fs-80 fw-bold">OF PERFORMANCE</h2>
          <h2 className="text-white fs-80 fw-bold">BACKED BY</h2>
          <h2 className="text-white fs-80 fw-bold">MASTERY AND ART.</h2>
<div className='icon-scroll' onClick={handleScroll}></div>
</Col>                    
</Row>
</Container>  
  )
}

export default IhomePage

