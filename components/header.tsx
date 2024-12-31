'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logowhite from '../public/assets/images/eln_logo_white.svg';
import { SlArrowDown } from "react-icons/sl";
import logoblack from '../public/assets/images/eln_logo.svg'
import downwhitearrow from '../public/assets/images/downwhitearrow.svg'
import downarrow from '../public/assets/images/downarrow..svg'
 
const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
 
  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
    // default close
    setProductsOpen(false);
    setResourceOpen(false);
    setCompanyOpen(false);
  };
 
  const closeMenu = () => {
    setMenuActive(false);
  };
 
  const handleBodyClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.mobile-menu-overlay__inner') && !target.closest('#mobile-menu-trigger')) {
      closeMenu();
    }
  };

// mobile click solution
  const [isProductsOpen, setProductsOpen] = useState(true);
  const [isResourceOpen, setResourceOpen] = useState(true);
  const [isCompanyOpen, setCompanyOpen] = useState(true);
 
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
 
    window.addEventListener('scroll', handleScroll);
    document.body.classList.toggle('no-overflow', isMenuActive);
    document.body.addEventListener('click', handleBodyClick as EventListener);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('click', handleBodyClick as EventListener);
    };
  }, [isMenuActive]);
 
  return (
    <div>
      <div className="header-area header-home mainheader">
        <div className={scroll ? 'header-sticky is-sticky' : 'header-sticky'}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header position-relative">
                  {/* Brand logo */}
                  <div className="header__logo">
                    <Link href="/">
                      <Image src={logowhite} className="head-home-logo" width="160" 
                      alt="Logilab ELN, an Electronic Laboratory Notebook that streamlines your 
                      research and helps you achieve compliance to GLP and 21 CFR Part 11." />
                    </Link>
                  </div>
 
                  <div className="header-right">
                    <div className="header__navigation menu-style-three d-none d-xl-block">
                      <nav className="navigation-menu">
                       
                          {/* Navigation items */}
                          <ul>
                                              <li className="nav-item">
                                                  <Link href="/" className="nav-link navdata" >
                                                    Home
                                                  </Link>
                                              </li>
                                           
                                                <li className="has-children has-children--multilevel-submenu">
                    
                                                      <Link href="/solution" className="nav-link navdata">
                                                        Solutions 
                                                        <Image 
                                                          src={scroll ? downarrow : downwhitearrow} 
                                                          className="responsive_image_bottom ms-1 downwhitearrow" 
                                                          alt=""
                                                        />
                                                      </Link>
                                               
                                                
                                               
                                                    <ul className="submenu">
                                                        <li>
                                                          <Link href="/solution/qa_qc_lab" className="nav-link">QA & QC Labs</Link>
                                                        </li>
                                                        <li> 
                                                        <Link href="/solution/research" className="nav-link">
                                                         Research & Development
                                                         </Link>
                                                         </li>
                                                        <li>
                                                          <Link href="/solution/integrity" className="nav-link">
                                                            Data Integrity
                                                          </Link>
                                                        </li>
                                                        <li>
                                                          <Link href="/solution/academics" className="nav-link">
                                                              Academics
                                                          </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                     
                                                <li className="has-children has-children--multilevel-submenu">
                                                  
                                                   <Link href="" className="nav-link navdata">
                                                      Resources 
                                                        <Image 
                                                          src={scroll ? downarrow : downwhitearrow} 
                                                          className="responsive_image_bottom ms-1 downwhitearrow" 
                                                          alt=""
                                                        />
                                                   </Link>
                                                    <ul className="submenu">
                                                    <li>                                                   
                                                          <Link href="https://www.logilabeln.com/blog/" className="nav-link">
                                                          Blog
                                                          </Link>
                                                        </li>
                                                    <li>
                                                                                                          
                                                          <Link href="/resource/publications" className="nav-link">
                                                          Publications
                                                          </Link>
                                                        </li>
                                                        <li>
                                                          <Link href="/resource/download" className="nav-link">
                                                            Downloads
                                                          </Link>
                                                        </li>
                                                        <li> 
                                                          <Link target="_blank" href="https://agaramtech.freshdesk.com/support/login" className="nav-link">
                                                            Support
                                                          </Link>
                                                         </li>
                                                         <li> 
                                                          <Link target="_blank" href="https://helpcenter.agaramtech.com" className="nav-link">
                                                            Help Center
                                                          </Link>
                                                         </li>
                                                        <li>
                                                          <Link href="/resource/faq" className="nav-link" >
                                                            FAQ
                                                          </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                 
                                                <li>
                                                  <Link href="/pricing" className="nav-link" >
                                                    Pricing
                                                  </Link>
                                                </li> 

                                                <li className="has-children has-children--multilevel-submenu">

                                                <Link href="" className="nav-link navdata">
                                                Company 
                                                        <Image 
                                                          src={scroll ? downarrow : downwhitearrow} 
                                                          className="responsive_image_bottom ms-1 downwhitearrow" 
                                                          alt=""
                                                        />
                                                </Link>
                                                    <ul className="submenu">
                                                        <li>
                                                          <Link href="/company/about-us" className="nav-link" >
                                                            About Us
                                                          </Link>
                                                        </li>
                                                        <li> 
                                                          <Link href="/company/certifications" className="nav-link" >
                                                            Certifications
                                                          </Link>
                                                         </li>
                                                        <li>
                                                          <Link href="/company/customers" className="nav-link">
                                                            Customers
                                                          </Link>
                                                        </li>
                                                        <li>
                                                          <Link href="/company/terms-conditions" className="nav-link" >
                                                            Terms and conditions
                                                          </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                  <Link href="/contact-us" className="nav-link" >
                                                    Contact Us
                                                  </Link>
                                                </li>                                        
                                      </ul>
                      </nav>
                    </div>
 
                    <div className="header__actions--preview">
                      <div className="header__actions">
                        <div className="header__icons-wrapper header-right-inner" id="hidden-icon-wrapper">
                          <div className="header-button downlode-btn ml-4 menu_for headermenu mb-1">

                            <div className='getstart'>
                               <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md ">Get Started</Link>
                            </div>
                            
                            <div className='signin'>
                              <Link href="/request-a-demo"  className="ht-btn ht-btn-md">Request Demo</Link>
                            </div>
                            
                          </div>
                        </div>
 
                        {/* Mobile menu trigger */}
                        <div
                          className="mobile-navigation-icon d-block d-xl-none"
                          id="mobile-menu-trigger"
                          onClick={toggleMenu} // Add onClick handler here
                        >
                          <i className="fas fa-bars"></i> {/* Example icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of header right */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuActive ? 'active' : ''}`} id="mobile-menu-overlay">
      {/* <div className='mobile-menu-overlay' id="mobile-menu-overlay"> */}
      <div className="mobile-menu-overlay__inner">
        <div className="mobile-menu-overlay__header">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6 col-8">
              <div className="header-button downlode-btn ml-4 menu_for headermenu mb-3">
                  <a href="https://www.agaramtech.com">
                  <Image src={logoblack} className="img-fluid mobile-logo" alt=""/>
                  </a>
              </div>
              </div>
              <div className="col-md-6 col-4">
                <div className="mobile-menu-content text-end">
                  <span
                    className="mobile-navigation-close-icon"
                    id="mobile-menu-close-trigger"
                    onClick={closeMenu}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-4 mobilemainheader">
            <div className="row align-items-center">
              <div className="col-md-6 col-6">
              <div className="header-button downlode-btn ml-4 mobilemenu_for headermenu mb-1">
               <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md mobilemenu_btn">Get Started</Link>
              </div>
              </div>
              <div className="col-md-6 col-6">
                <div className="mobile-menu-content header-button downlode-btn ml-4 mobilemenu_for headermenu mb-1">
                <Link href="/request-a-demo"  className="ht-btn ht-btn-md mobilemenu_btn" onClick={() => {setResourceOpen(false); setMenuActive(false);}}>Request Demo</Link>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-overlay__body">
          <nav className="offcanvas-navigation">
            <ul>

            <li className="nav-item">
              <Link href="/" className="nav-link navdata" onClick={() =>  setMenuActive(false)}>
                Home
              </Link>
            </li>

            <li className="has-children">
              {/* <span className="uparrowposition"> */}
                              <Link 
                    href="/solution" 
                    onClick={(e) => {
                      if (isProductsOpen) {
                        e.preventDefault(); // Prevent default link behavior if submenu is open
                      } // Prevent default link behavior
                      setProductsOpen(!isProductsOpen); // Toggle submenu
                    }} 
                    style={{ cursor: 'pointer' }}
                    className={`uparrow ${isProductsOpen ? "active" : ""}`} id='submenuline'
                  > 
                    Solutions 
                  </Link>
              {/* </span> */}

  {isProductsOpen && (
    <ul className="sub-menu">
      <li>
        <Link href="/solution/qa_qc_lab" className="nav-link" onClick={() =>{ setProductsOpen(false); setMenuActive(false);}}>QA & QC Labs</Link>
      </li>
      <li>
        <Link href="/solution/research" className="nav-link" onClick={() => {setProductsOpen(false);  setMenuActive(false);}}>Research & Development</Link>
      </li>
      <li>
        <Link href="/solution/integrity" className="nav-link" onClick={() => {setProductsOpen(false); setMenuActive(false);}}>Data Integrity</Link>
      </li>
      <li>
        <Link href="/solution/academics" className="nav-link" onClick={() => {setProductsOpen(false); setMenuActive(false);}}>Academics</Link>
      </li>
    </ul>
  )}
</li>



<li className="has-children">
            <Link 
    href="" 
    onClick={(e) => {
      e.preventDefault(); // Prevent default link behavior
      setResourceOpen(!isResourceOpen); // Toggle submenu
    }} 
    style={{ cursor: 'pointer' }}
    className={`uparrow ${isResourceOpen ? "active" : ""}`} id='submenuline'
  >
     Resources 
  </Link>
  {isResourceOpen && (
    <ul className="sub-menu"> 
    <li>
        <Link href="https://www.logilabeln.com/blog/" className="nav-link" onClick={() => {setResourceOpen(false); setMenuActive(false);}}>Blog</Link>
      </li>
       <li>
        <Link href="/resource/publications" className="nav-link" onClick={() => {setResourceOpen(false); setMenuActive(false);}}>Publications</Link>
      </li>
      <li>
        <Link href="/resource/download" className="nav-link" onClick={() => {setResourceOpen(false); setMenuActive(false);}}>Downloads</Link>
      </li>
      <li>
        <Link  target="_blank" href="https://agaramtech.freshdesk.com/support/login" 
        className="nav-link" onClick={() => {setResourceOpen(false); setMenuActive(false);}}> Support & Knowledge base</Link>
      </li>
      <li>
        <Link href="/resource/faq" className="nav-link" onClick={() => {setResourceOpen(false); setMenuActive(false);}}>FAQ</Link>
      </li>
     
    </ul>
  )}
</li>
         
            <li className="nav-item">
              <Link href="/pricing" className="nav-link navdata"  onClick={() =>  setMenuActive(false)}>
                Pricing
              </Link>
            </li>
         
   <li className="has-children">     
            <Link 
    href="" 
    onClick={(e) => {
      e.preventDefault(); // Prevent default link behavior
      setCompanyOpen(!isCompanyOpen); // Toggle submenu
    }} 
    style={{ cursor: 'pointer' }}
    className={`uparrow ${isCompanyOpen ? "active" : ""}`} id='submenuline'
  >
     Company 
  </Link>
  {isCompanyOpen && (
    <ul className="sub-menu">
      <li>
        <Link href="/company/about-us" className="nav-link" onClick={() => {setCompanyOpen(false); setMenuActive(false);}}>About Us</Link>
      </li>
      <li>
        <Link href="/company/certifications" className="nav-link" onClick={() => {setCompanyOpen(false); setMenuActive(false);}}>Certifications</Link>
      </li>
      <li>
        <Link href="/company/customers" className="nav-link" onClick={() => {setCompanyOpen(false); setMenuActive(false);}}>Customers</Link>
      </li>
	  <li>
        <Link href="/company/terms-conditions" className="nav-link" onClick={() => {setCompanyOpen(false); setMenuActive(false);}}>Terms and conditions</Link>
      </li>
     
    </ul>
  )}
</li>

            <li>
              <Link href="/contact-us" className="nav-link"  onClick={() =>  setMenuActive(false)}>
               Contact Us
              </Link>
            </li>
             
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </div>
  );
};
 
export default Header;