import Image from 'next/image'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CareerCom = () => {

    const options = [
        { value: 'account_manager', label: 'Account Manager/Client Servicing' },
        { value: 'content_writer', label: 'Content Writer' },
        { value: 'ui_ux_designer', label: 'UI/UX Designer' },
        { value: 'front_end_developer', label: 'Front-End Developer' },
        { value: 'back_end_developer', label: 'Back-End Developer' },
        { value: 'paid_marketing_specialist', label: 'Paid Marketing Specialist' },
        { value: 'seo', label: 'SEO' }
    ];

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.size <= 5 * 1024 * 1024) { // 5MB in bytes
                setSelectedFile(file);
                setErrorMessage('');
            } else {
                setSelectedFile(null);
                setErrorMessage('File size exceeds the maximum limit of 5MB.');
            }
        }
    };

    return (
        <>
            <style>
                {`
            input[type="file"] {
                color: white;
            }
            `}
            </style>
            <Container className="w-80">
                <Row>
                    <Col lg={8}>
                        <h1 className="fs-21 text-white fw-bold">CAREERS</h1>
                        <p className="text-white para-text">
                            Discover the exceptional career opportunities at iVista. Join our dynamic team and collaborate with talented professionals and esteemed clients. Engage in innovative projects that make a significant impact, while embracing a professional work culture characterized by positivity and dedication. Unleash your full potential and together, let&apos;s redefine the possibilities in the digital marketing industry.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <h1 className="fs-21 text-white fw-bold">GET IN TOUCH</h1>
                        <form class="row g-3 pt-4 mt-3">
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Full Name *</label>
                                <input class="form-control" type="text" id="formFile" />
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Mobile Number *</label>
                                <input class="form-control" type="text" id="formFile" />
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Email *</label>
                                <input class="form-control" type="text" id="formFile" />
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label w-100">Job Type</label>

                                <select value={selectedOption} onChange={handleChange} className='w-100 p-2 rounded-3'>
                                    <option value="">Job Type</option>
                                    {options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                {/* {selectedOption && (
                                    <p>You selected: {options.find(option => option.value === selectedOption).label}</p>
                                )} */}
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label w-100">Attach your CV </label>
                                <input type="file" onChange={handleFileChange} />
                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                {selectedFile && (
                                    <div>
                                        <p>Selected file: {selectedFile.name}</p>
                                        <p>Size: {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                                    </div>
                                )}
                            </div>
                            <div class="mb-3 text-center">
                                <button type="button" class="btn btn-15">Submit</button>
                            </div>
                        </form>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-center align-items-center">
                        <Container className="iv-bg contact">
                            <h1 className="contact-head pb-4">iVistaz Ecom Services Pvt Ltd</h1>
                            <p className="contact-text text-center">RELIAABLE PHOENIX TOWERS</p>
                            <p className="contact-text text-center">4th Floor, 16 & 16/1,</p>
                            <p className="contact-text text-center">Museum Road</p>
                            <p className="contact-text text-center">BENGALURU, KA 560025</p>
                            <Container className="text-center pt-5">
                                <Row className="g-0">
                                    <Col className="d-flex align-items-center justify-content-end">
                                        <p className="footer-text">Follow Us:</p>
                                    </Col>
                                    <Col className="d-flex align-items-center justify-content-start">
                                        <Image src="/images/facebook.svg" width={40} height={40} className="social" />
                                        <Image src="/images/linkedin.svg" width={43} height={43} className="social" />
                                        <Image src="/images/instagram.svg" width={44} height={44} className="social" />
                                        <Image src="/images/twitter.svg" width={44} height={44} className="social" />
                                    </Col>
                                </Row>
                            </Container>
                        </Container>

                    </Col>
                </Row>
                <p className="para-text text-white">We value your privacy and will handle your information with utmost confidentiality. By submitting this form, you agree to our Privacy Policy.</p>
            </Container>


        </>
    )
}

export default CareerCom