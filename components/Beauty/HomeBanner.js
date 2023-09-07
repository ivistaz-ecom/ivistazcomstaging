import React, { useEffect,  useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
  
function HeroBanner() {

    return (
<>
<Container className="bg-white banner w-80" >
<Row className="d-flex align-items-center">
<Col lg={7} className="pl-8">        
<h1 className="fs-21 fw-bold">BEAUTY & WELLNESS</h1>
</Col>              
<Col lg={5}>
<Image src="/images/automobiles.svg" width={400} height={400} />
</Col>
</Row>
</Container>
<Container className="pt-4 w-80 pb-4 pt-4" >
                <p className="text-white para-text">The beauty and wellness market has been growing at a rapid pace in India. The market in India was valued at INR 901.07 Bn in 2018 and is forecasted to reach INR 2,463.49 Bn by the year 2024.</p>
                <p className="text-white para-text">What is notable is that the beauty and wellness market today straddles the affluent as well as the middle class, the female as well as the male sexes, the synthetic brands as well as the organic brands. The sheer number of new entrants, especially in the ‘natural’, ‘vegan’ ‘safe’ and ‘sustainable’ categories is testimony to the exponential growth of the industry.</p>


</Container>            
            <Container className="iv-bg w-80 banner p-5">
            <p className="fw-bold text-white fs-3">To help your brand to stand out in a highly crowded market, we will:</p>                
                <p className="text-white para-text">Develop and implement robust search strategies to drive your primary target audience to your brand store and marketplaces.</p>
                <p className="text-white para-text">Create a robust performance-based e-commerce model with a monthly/quarterly goal of improving and sustaining your revenues.</p>                
                <p className="text-white para-text">Create a robust e-commerce channel that will not only improve revenues on your e-store and marketplaces but also drive customers to your offline stores.</p>
<Container className="text-center w-80">
<Link className="btn-14" href="/contact-us">Contact us</Link></Container>
</Container>
<Container className="mt-5 mb-5 w-80">
<p className="fs-2 text-white">Here’s how we helped beauty and wellness brands secure a winning edge:</p>
</Container>
<Container className="w-80">
<Row>
<Col>
<div class="iv-cards">
<Image src="/images/1.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
  <div class="card-body">
    <h5 class="card-title">DIGITAL MARKETING ROUNDUP JANUARY 2022</h5>
    <p class="card-text">In the January version of Digital Marketing Roundup, we provide the latest news and updates from the Digital marketing indust…</p>
    <a href="#" class="iv-link">Read more <FaArrowRight className="icons"/></a>
  </div>
</div>
</Col>
<Col>
<div class="iv-cards">
<Image src="/images/2.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
  <div class="card-body">
    <h5 class="card-title">DIGITAL MARKETING ROUNDUP DECEMBER 2021</h5>
    <p class="card-text">In the December version of Digital Marketing Roundup, we provide the latest news and updates from the Digital marketing indus…</p>
    <a href="#" class="iv-link">Read more <FaArrowRight className="icons"/></a>
  </div>
</div>
</Col>
<Col>
<div class="iv-cards">
<Image src="/images/3.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
  <div class="card-body">
    <h5 class="card-title">CROWDS VERSUS COMMUNITIES: A QUICK GUIDE FOR THE PERPLEXED</h5>
    <p class="card-text">The wisdom of the crowd is one of the tenets of Web 2.0. It’s the belief that the aggregated opinions of a large group of people will be as g…</p>
    <a href="#" class="iv-link">Read more <FaArrowRight className="icons"/></a>
  </div>
</div>
</Col>
</Row> 
   
</Container>        
<Container className="w-80 mt-5 d-flex justify-content-center">
<Link href="/case-studies" className="btn-13">View Case Studies</Link>   
</Container>         
</>
  )
}

export default HeroBanner
