"use client"
import React from 'react'
import HomeBanner from '../../../../components/mastery/HomeBanner';
import { Container } from 'react-bootstrap';
import Header1 from '../../../../components/HeaderBlack';

function page() {
  return (
<Container fluid className="bg-black pb-5">
<Header1/>
<h1 className="text-offwhite fs-70 fw-bold text-center">MASTERY</h1> 
<HomeBanner />
</Container>
  )
}

export default page
