import React, { useEffect,  useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 import Svg from '../Automobiles/svg'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { FaArrowRight } from "react-icons/fa";
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  
function HeroBanner() {

    return (
<>
<Container className="bg-white banner w-80 pb-5" >
<Row className="d-flex align-items-start">
<Col lg={12} className="pl-8 pt-5">        
<h1 className="fs-21 fw-bold">Solutions</h1>
<p className="para-text">In the ever-changing realm of digital marketing, expectations have taken a quantum leap, compelling individuals to adapt like never before. Brands have relentlessly pursued growth by embracing innovative solutions. That’s where we step in. With a passion for creating exceptional experiences and staying ahead of the curve, we’ve mastered our art. And today, we don’t just perform, we outperform.</p>
</Col>
<Col lg={12} className="pl-8 pt-5">  
<Link className="fs-3 i-link" href="/industries/automobiles">Value Creation</Link></Col>
                    <Col lg={12} className="pl-8 pt-4">  
<Link className="fs-3 i-link" href="/industries/tech">Traffic</Link></Col>
                    <Col lg={12} className="pl-8 pt-4">  
<Link className="fs-3 i-link" href="/industries/hospitality">Lead-gen</Link></Col>
                    <Col lg={12} className="pl-8 pt-4">              
<Link className="fs-3 i-link" href="/industries/appliances">Online Sales</Link></Col>
                    <Col lg={12} className="pl-8 pt-4">               
<Link className="fs-3 i-link" href="/industries/ngo">Experience</Link></Col>
</Row>
</Container>
        
</>
  )
}

export default HeroBanner
