import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../../../components/HeaderBlack'
import HeroBanner from '../../../../components/Fashion/HomeBanner'

function page() {
    return (
        <Container fluid className="bg-black pb-5">
            <Header />
            <HeroBanner />
        </Container>
    )
}

export default page
