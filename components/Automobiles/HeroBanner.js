import React, { useEffect,  useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import { gsap } from "gsap";
//import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 import Svg from '../Automobiles/svg'
//import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
//import { MotionPathPlugin } from "gsap-trial/MotionPathPlugin";
//import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import { FaArrowRight } from "react-icons/fa";
  // for another helper function that calculates the exact progress value along a motion path where it'll hit the center of the provided target on the given axis ("y" by default), see https://codepen.io/GreenSock/pen/BaPdrKM
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  
function HeroBanner() {

    return (
      <>




<Container className="bg-white banner w-80" >
<Row className="d-flex align-items-center">
<Col lg={7} className="pl-8">        
<h1 className="fs-21 fw-bold">AUTOMOBILES</h1>
</Col>              
<Col lg={5}>
<Image src="/images/automobiles.svg" width={400} height={400} />
</Col>
</Row>
</Container>
<Container className="pt-4 w-80 pb-4 pt-4" >
<p className="text-white para-text">According to the Ministry of Heavy Industries, Government of India, the automotive industry is likely to see significant transformations at a global level in the next ten years. Among the notable changes will be the shift of growth in demand for automobiles from developed nations to developing nations (mainly BRICS).</p>
<p className="text-white para-text">India aims to double its auto industry size to Rs. 15 lakh crores by end of the year 2024 (Source: Ministry of Heavy Industries).</p>

</Container>            
<Container className="iv-bg w-80 banner p-5">
<p className="fw-bold text-white fs-3">Your focus would be on strengthening your market share in India by growing your sales and dealer network. iVista can support you in this journey and help:</p>                
<p className="text-white para-text">Your brand to increase online enquiries, bookings and sales conversion ratios.</p>
<p className="text-white para-text"> To increase your qualified leads and sales conversion ratios for you directly and for your dealers.                    
                </p>
<Container className="text-center w-80">
<Button className="btn iv-btn">Contact us</Button></Container>
</Container>
<Container className="mt-5 mb-5 w-80">
<p className="fs-2 text-white">Here’s how we have helped brands win over the dynamic and highly competitive industry:</p>
</Container>
<Container className="w-80">
<Row>
<Col>
<div class="iv-card">
<Image src="/images/1.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
  <div class="card-body">
    <h5 class="card-title">DIGITAL MARKETING ROUNDUP JANUARY 2022</h5>
    <p class="card-text">In the January version of Digital Marketing Roundup, we provide the latest news and updates from the Digital marketing indust…</p>
    <a href="#" class="iv-link">Read more <FaArrowRight/></a>
  </div>
</div>
</Col>
<Col>
<div class="iv-card">
<Image src="/images/2.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
  <div class="card-body">
    <h5 class="card-title">DIGITAL MARKETING ROUNDUP DECEMBER 2021</h5>
    <p class="card-text">In the December version of Digital Marketing Roundup, we provide the latest news and updates from the Digital marketing indus…</p>
    <a href="#" class="iv-link">Read more <FaArrowRight/></a>
  </div>
</div>
</Col>
<Col>
<div class="iv-card">
<Image src="/images/3.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
  <div class="card-body">
    <h5 class="card-title">CROWDS VERSUS COMMUNITIES: A QUICK GUIDE FOR THE PERPLEXED</h5>
    <p class="card-text">The wisdom of the crowd is one of the tenets of Web 2.0. It’s the belief that the aggregated opinions of a large group of people will be as g…</p>
    <a href="#" class="iv-link">Read more <FaArrowRight/></a>
  </div>
</div>
</Col>
</Row> 
   
</Container>        
<Container className="w-80 mt-5 text-center">
<a href="" className="iv-primary">View Case Studies</a>   
</Container>        
</>
  )
}

export default HeroBanner
