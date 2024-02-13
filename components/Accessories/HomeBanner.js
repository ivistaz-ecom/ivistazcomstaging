import React, { useEffect, useRef } from 'react'
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
            <h1 className="fs-21 fw-bold">FASHION & ACCESSORIES</h1>
          </Col>
          <Col lg={5}>
            <Image src="/industries/fashion.svg" width={400} height={400} alt='' />
          </Col>
        </Row>
      </Container>
      <Container className="pt-4 w-80 pb-4 pt-4" >
        <p className="text-white para-text">According to an article by the Times of India, the fashion industry is poised to grow into a $106 billion industry by 2026, bringing up the Indian fashion market on maps. We will help you to capitalize on this market opportunity with robust digital solutions that include:</p>
      </Container>
      <Container className="iv-bg w-80 banner p-5">
        <p className="text-white para-text">Bridging the gap between online visitors and sales (in-store and online) both on your e-store, as well as on marketplaces and increasing online conversions.</p>
        <p className="text-white para-text">Creating strong curated online experiences for your customers to strengthen brand loyalty.</p>
        <p className="text-white para-text">Ensuring a consistent social media engagement with your customers.</p>
        <Container className="text-center">
          <Col className='d-flex flex-column align-items-center'>
            <Link className="btn-14" href="/contact-us">Contact us</Link>
          </Col>
        </Container>
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
                <a href="#" class="iv-link">Read more <FaArrowRight className="icons" /></a>
              </div>
            </div>
          </Col>
          <Col>
            <div class="iv-cards">
              <Image src="/images/2.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
              <div class="card-body">
                <h5 class="card-title">DIGITAL MARKETING ROUNDUP DECEMBER 2021</h5>
                <p class="card-text">In the December version of Digital Marketing Roundup, we provide the latest news and updates from the Digital marketing indus…</p>
                <a href="#" class="iv-link">Read more <FaArrowRight className="icons" /></a>
              </div>
            </div>
          </Col>
          <Col>
            <div class="iv-cards">
              <Image src="/images/3.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
              <div class="card-body">
                <h5 class="card-title">CROWDS VERSUS COMMUNITIES: A QUICK GUIDE FOR THE PERPLEXED</h5>
                <p class="card-text">The wisdom of the crowd is one of the tenets of Web 2.0. It’s the belief that the aggregated opinions of a large group of people will be as g…</p>
                <a href="#" class="iv-link">Read more <FaArrowRight className="icons" /></a>
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
