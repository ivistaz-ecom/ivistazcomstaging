"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import { FaBars } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import {usePathname} from 'next/navigation';


function Header1() {
  const pathname = usePathname()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [style , setStyle]= useState(false)
  
 
  return (
<Container className="mb-5" fluid>
      <Container>     
<nav class="navbar bg-color z-index-100">
<div class="container-fluid">
<Link class="navbar-brand" href="/">
<Image src="/images/ivista_logo.svg" width={200} height={40} className="img-fluid"/></Link>
<button
className= { (pathname === '/arts' || pathname === '/arts/services' || pathname === '/arts/services/digital-marketing' || pathname === '/arts/services/content-development-design' || pathname === '/arts/services/design-development') ? "btn btn-outline-black" : "btn btn-outline" } type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <FaBars size={27} />
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header justify-content-end">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
<div class="offcanvas-body">
                <Container className="text-center">
                <Link class="navbar-brand" href="/">
<Image src="/images/ivista_logo.svg" width="300" height={100} /></Link>
</Container>
<ul class="navbar-nav text-center flex-grow-1 pe-3">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" href="/arts/services">Services</Link></li>
          <li className="divider-center">
           <hr class="m-divider"/>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/mastery/solutions">Solutions</Link>
                  </li>
          <li className="divider-center">
           <hr class="m-divider"/>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" href="/industries" role="button" data-bs-toggle="dropdown" aria-expanded="false">Industries</Link>
            <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="/industries/automobiles">Automobiles</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" href="/industries/tech">Tech/IT</Link></li>
            <li><hr class="dropdown-divider"/></li>
                      <li><Link class="dropdown-item" href="/industries/hospitality"> Hospitality</Link></li>
                      <li><hr class="dropdown-divider"/></li>
                      <li><Link class="dropdown-item" href="/industries/appliances">Appliances</Link></li>
                      <li><hr class="dropdown-divider"/></li>
                      <li><Link class="dropdown-item" href="/industries/ngo">Not-for-Profits/NGOs</Link></li>
                      <li><hr class="dropdown-divider"/></li>
                      <li><Link class="dropdown-item" href="/industries/jewelry">Jewelry</Link></li>
                      <li><hr class="dropdown-divider"/></li>
                      <li><Link class="dropdown-item" href="/industries/beauty">Beauty & Wellness</Link></li>
                      <li><hr class="dropdown-divider"/></li>
                      <li><Link class="dropdown-item" href="/industries/accessories">Fashion & Accessories</Link></li>
            </ul>
            </li>
          <li className="divider-center">
           <hr class="m-divider"/>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" href="/case-studies">Case Studies</Link>
                  </li>
          <li className="divider-center">
           <hr class="m-divider"/>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" href="/blogs">Blog</Link>
                  </li>
         <li className="divider-center">
           <hr class="m-divider"/>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</Link>
            <ul class="dropdown-menu">
             <li><Link class="dropdown-item" href="/mastery/about-us">About</Link></li>
              <li><hr class="dropdown-divider"/></li>
              <li><Link class="dropdown-item" href="#">Team</Link></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><Link class="dropdown-item" href="#">Team</Link></li>
            </ul>
                  </li> 
        <li className="divider-center">
           <hr class="m-divider"/>
          </li>      
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" href="/contact-us">Contact</Link>
          </li>         
        </ul>
                
      
      </div>
    </div>
  </div>
</nav>
</Container>      
</Container>
 )
}

export default Header1