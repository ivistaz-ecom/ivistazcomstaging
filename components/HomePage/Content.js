'use client'
import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import {Row, Col} from 'react-bootstrap'

function HomePage() {
    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
      }

    return (
<>
<Container className="iv-bg  h-100vh" fluid>
<Row className="d-flex flex-column align-items-center" style={{height:500+'px'}}>
<Col className="d-flex flex-column justify-content-center align-items-center">
<Image src="/images/ivista_logo.svg" width={300} height={80} className="img-fluid" /></Col>                    
<Col className="d-flex flex-column justify-content-center align-items-center">
<h2 className="text-white fs-60 fw-bold">WHAT DOES</h2>
<div class="animate seven text-white fs-70 fw-bold">
<span>P</span><span>E</span><span>R</span><span>F</span>
<span>O</span><span>R</span><span>M</span><span>A</span><span>N</span><span>C</span><span>E</span>
	</div>            
<h2 className="text-white fs-60 fw-bold"> MEAN TO YOU?</h2>
<div className='icon-scroll' onClick={handleScroll}></div>
</Col>                    
</Row>
</Container>
</>
  )
}

export default HomePage
