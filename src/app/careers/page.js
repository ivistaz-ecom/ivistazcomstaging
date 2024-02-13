"use client"
import React from 'react';
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { Row, Col, Button } from 'react-bootstrap'
import Header1 from '../../../components/HeaderBlack';
import CareerCom from '../../../components/CareersComponents/CareerCom';

function page() {

  return (
    <>
      <Container className="bg-black pb-5" fluid>
        <Header1 />
        <CareerCom />
      </Container>
    </>
  )
}

export default page
