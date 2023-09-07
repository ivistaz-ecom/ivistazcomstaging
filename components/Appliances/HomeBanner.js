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
<h1 className="fs-21 fw-bold">APPLIANCES</h1>
</Col>              
<Col lg={5}>
<Image src="/images/automobiles.svg" width={400} height={400} />
</Col>
</Row>
</Container>
<Container className="pt-4 w-80 pb-4 pt-4" >
<p className="text-white para-text">The Indian Appliances and Consumer Electronics industry is expected to double to Rs.1.48 lac crore by 2025 according to CEAMA. A recent report by Flipkart and Bain & Co says the number of online shoppers in India is likely to grow to 400 million-450 million by 2027 from 180 million-190 million in 2021 and appliances (along with mobiles and electronics) will have among the highest market shares at 25-30%.</p>


</Container>            
<Container className="iv-bg w-80 banner p-5">
                <p className="text-white para-text">The size of customers doing research online and buying offline is rapidly shrinking. More and more buyers are now comfortable buying even large appliances online. Undoubtedly, you would be looking to capitalize on this opportunity.</p>
                <p className="text-white para-text"> Our carefully tailored digital marketing strategies will help to increase online sales both on your brand e-store as well as on marketplaces.</p>                
<Container className="text-center w-80">
<Link className="btn-14" href="/contact-us">Contact us</Link></Container>
</Container>
<Container className="mt-5 mb-5 w-80">
<p className="fs-2 text-white">Here’s how we have helped appliance brands to win in the e-commerce channel:</p>
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
    <a href="#" class="iv-link">Read more <FaArrowRight  className="icons"/></a>
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
