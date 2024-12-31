"use client";

import Image from "next/image";
import Comprehensive_audit_trails from '../../public/assets/images/Comprehensive_audit_trails.svg'
import cta2 from '../../public/assets/images/cta2.svg'  
import type { Metadata } from "next";
import { useRouter } from 'next/router';
import Streamline_Date from '../../public/assets/images/Streamline_Date.svg'
import centralized_Data from '../../public/assets/images/centralized_Data.svg'
import Manage_Project from '../../public/assets/images/Manage_Project.svg'
import Effortless_Collaboration from '../../public/assets/images/Effortless_Collaboration.svg'
import Automate_Encrypt from '../../public/assets/images/Automate_Encrypt.svg'
import Sample_Management from '../../public/assets/images/Sample_Management.svg'
import setup_config from '../../public/assets/images/setup_config.svg'
import  Link  from 'next/link';
import Litetestimonials from "@/components/litetestimonials"
import { Accordion, Card, Button } from 'react-bootstrap';
import QA_Labsheet from '../../public/assets/images/QA_Labsheet.svg' 
import Trace_Flow from '../../public/assets/images/Trace_Flow.svg'
import centralized_repository from '../../public/assets/images/centralized_repository.svg'	
import clock_section from '../../public/assets/images/clock_section.svg'
import LiteSlider from "@/components/liteslider";
import smart_blub from '../../public/assets/images/smart_blub.svg'
import logilabeln_group from '../../public/assets/images/logilabeln_group.svg'
import support_person from '../../public/assets/images/support_person.svg'
import logowhite from '../../public/assets/images/eln_logo_white.svg';
import lite_bannaerbtn from '../../public/assets/images/lite_bannaerbtn.svg';
import Footer from "@/app/footer";
const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <h1>Product ID: {productId}</h1>
    </div>
  );
}



export default function Solution() {
  
return (
  <div className="lite-page compare">
    
     
        <div className="soltionbglite lite solutionmain security_banner_content litebanner_btn">
          <div className="container">
          
              <div className="row compare">
              <div className="col-lg-8 col-md-6 col-4">
            <div className="header__logo">
                    <Link href="/">
                      <Image src={logowhite} className="head-home-logo" width="160" 
                      alt="Logilab ELN, an Electronic Laboratory Notebook that streamlines your 
                      research and helps you achieve compliance to GLP and 21 CFR Part 11." />
                    </Link>
                  </div>
            </div>
            <div className="col-lg-4 col-md-6 col-8 mt-4">
            <div className="header__actions--preview">
                      <div className="header__actions">
                        <div className="header__icons-wrapper header-right-inner" id="hidden-icon-wrapper">
                          <div className="header-button downlode-btn ml-4 menu_for headermenu mb-1">
                            <div className='getstart'>
                               <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md">Get Started</Link>
                            </div>
                            
                            <div className='signin'>
                              <Link href="/request-a-demo"  className="ht-btn ht-btn-md">Request Demo</Link>
                            </div>                            
                          </div>
                        </div>
                      </div>
                    </div>
          </div>



                <div className="col-lg-12  pt-4 litebannercol">
                    <div className="solution_security_banner_content lite bannerresolution">
                      <h1 className="wow fadeInUp py-3  mt-4 text-center" data-wow-delay="0.3s">
                      Logilab Eln Lite – Everything you need, <br/> without  breaking the bank
                      </h1>
                      <p className="f_400 w_color l_height28 wow fadeInUp  para_response text-center" data-wow-delay="0.4s">
                      Affordable pricing, flexible upgrades as your lab grows
                      </p>                 
                    </div>   

                    <div className="d-flex action_btn justify-content-center mt_40  bannerresolution_btn" data-wow-delay="0.6s">
                         <Link className="btn btn--white mx-4 text-center lite" href="https://logilabelnlite.azurewebsites.net/register">Get Started</Link>
                    </div>         
                </div>
        
              </div>
       <Link className="" href="https://logilabelnlite.azurewebsites.net/register">
                <div className="litebanner_btn-image">
                <Image src={lite_bannaerbtn} className="img-fluid  litebanner_btn-image_width" 
                  alt=""/>

                </div>
 </Link> 

            </div>
        </div>
     



    
    <div className="bg-lblue   litebannercol one_section_bg">
    <div className="container">
       <div className="row">
       <div className="hosting_title sec_title erp_title text-center">
        <h2 className="text-center pt-2 fw-bold ">What Sets Logilab ELN Lite Apart?</h2>
       </div> 
         <div className="col-lg-6 ">
              <div className=" litebannercol">
              <Image src={clock_section} className="img-fluid clock-section-image" 
                  alt=""/>  
              </div>
         </div>

         <div className="col-lg-6 desktoplite">  
            <div className="ms-5 ps-5 responsive-margin-padding one_section_para one_section_bg_para">
                <p className="text-black what-para">Logilab ELN Lite simplifies research data management,streamlines inventory tracking, 
                  enhances team collaboration, and ensures the integrity of your data — all in one unified
                  platform.
                </p>       
            </div>         
         </div>
       </div>
     </div>
    </div>
    <div className="lite-one-section">
     {/* Second */}
    <div className="container py-3 sectionresolution" id="scrollspyHeading1">
         <div className="row">

        <div className="col-lg-6 ">
           <div className="mt-5 pt-5 ms-3 litebannercol">
                 <h3 className="solution_fontcolor fw-bold mb-2 topichead_response">Record and Access Your Work Anywhere</h3>
              <div>
                
          <ul className="dark-check-list">    
                  <li className="list-item firstp">
                      Organize, search, and share your experiment and test data effortlessly in an electronic lab notebook that accelerates high-quality research.
										</li>
               
										<li className="list-item">
                        Gain real-time insights and updates through a comprehensive dashboard to easily track your
                        team's performance and project outcomes. 
									</li>										
							</ul>	
              </div>
            </div> 
           
              
        </div>
        <div className="col-lg-6  order-two">
                  <div className="researchfirst_border  p-4 image_postion sectionresolution"> 
                  <Image src={Trace_Flow} className="img-fluid" 
                  alt="Standardize your research data, keep track of your inventory levels and stay compliant 
                  to regualtory standards such as Good Laboratory Practice with Logilab Electronic Lab Notebook."/>
                  </div>
                  
          </div>
         </div>
    </div>

   {/* Third */}
   <div className="container py-5 sectionresolution" id="scrollspyHeading1">
         <div className="row">
         <div className="col-lg-6 order-two">
            <div className="researchfirst_border  p-4 image_postion sectionresolution ms-3"> 
                <Image src={QA_Labsheet} className="img-fluid" 
                 alt="Simplify laboratory data entry with Logilab Electronic Notebook's form-like templates 
                called Labsheets — choose your fields, attach diverse forms of data and perform complex 
                calculations in real-time."/>	
            </div>
                  
         </div>

         <div className="col-lg-6 ">
           <div className="mt-5 pt-5 litebannercol">

                 <h3 className="solution_fontcolor fw-bold mb-2 topichead_response" >Labsheets — Transforming How Labs
                                                     Capture & Calculate Data</h3>
              <ul className="dark-check-list">    
                  <li className="list-item">
                  Simple yet powerful spreadsheet interface to
                    streamline your lab data. Create Excel-like templates for
                    experiments, logbooks, and SOPs.
										</li>
               
										<li className="list-item">
                    Design your spreadsheets with drag-and-drop functionality, manage multiple workbook templates, and execute complex
                    formulas on the go—keeping all your data in one place for efficient research.
									</li>										
							</ul>	
            </div>              
           </div>         
         </div>
    </div>

     {/* Forth */}
    <div className="container py-3  sectionresolution" id="scrollspyHeading1">
         <div className="row">
    
           <div className="col-lg-6 ">
           <div className="mt-5 pt-5 ms-3 litebannercol">

                 <h3 className="solution_fontcolor fw-bold mb-2 topichead_response" >Trace the Flow — Keep Projects on Track</h3>
              <div>
                    <ul className="dark-check-list">    
                  <li className="list-item">
                  Monitor deadlines and ensure everything stays on track.
                    With robust version control, your data is fully preserved,preventing accidental loss — it remains secure in the
                    system forever.
										</li>
               
										<li className="list-item">
                    Manage access by assigning specific permissions and privileges to your lab mates as needed for
                    each project.
									</li>										
							</ul>	
              </div>
            </div> 
           
              
           </div>


          <div className="col-lg-6  order-two">
                  <div className="researchfirst_border  p-4 image_postion sectionresolution"> 
                  <Image src={centralized_repository} className="img-fluid " 
                  alt="Integrate all of your lab activities from sample management to workflows seamlessly 
                   in Logilab Electronic Lab Notebook"/>  	
                  </div>
                  
        </div>
             
         </div>
    </div>

    {/* First*/}
     <div className="container py-3 mt-4 sectionresolution">
         <div className="row">
         <div className="col-lg-6   order-two">
                  <div className="researchfirst_border  p-3 image_postion sectionresolution ms-3 mt-5"> 
                  <Image src={logilabeln_group} className="img-fluid" 
                  alt="Standardize your research data, keep track of your inventory levels and stay compliant 
                  to regualtory standards such as Good Laboratory Practice with Logilab Electronic Lab Notebook."/>
                  </div>
                  
                </div>

           <div className="col-lg-6">
           <div className=" mt-5 pt-5 ms-3 litebannercol">

                 <h3 className="solution_fontcolor fw-bold mb-2 topichead_response" >
                 Flexible Billing for Growing Labs & Teams </h3>
              <div>
                    <p className=" text-black pt-1 firstp">
                    You only pay for what you need, when you need it.
                    </p>         
              </div>

<ul className="dark-check-list">
<div className="litespan">
                  <li className="list-item">
                  <span style={{ fontWeight: 'bold' }}>Start Small, Scale Big:&nbsp;</span> Begin with our affordable Lite plan, ideal for individual users or smaller teams, and easily upgrade as your lab or team grows.
										</li>
                    </div>
                    <div className="litespan">
										<li className="list-item">
                    <span style={{ fontWeight: 'bold' }}>Seamless Upgrades:&nbsp;</span>  As your needs expand, you can upgrade to our Standard, Premium, or Enterprise plans with minimal disruptions to your workflow.

										</li>
                    </div>	
							</ul>	
            </div> 
           </div>  
         </div>
    </div> 
   
   <div className="litehead  bg-lblue py-5 mt-5 litte-pt-pb">
      <div className="container">
      <div className="mt-2">
      <div className="hosting_title sec_title erp_title text-center">

      <h2 className="fw-bold text-center compare-sub ">
            Logilab ELN Lite helps you and your team work  <span style={{color:'#1163ea'}} className= "mx-2">  Sm<Image src={smart_blub} className="img-fluid smart-blub" alt=""/>rter</span> 
          and get more done for less </h2>
        </div>
        <div className="row blue-bg-mt-mb">
                        <div className="col-lg-6">
                        <h4 className="text-left fw-bold mb-4 py-3 ps-3 headlineresponselite Teams_compare" style={{color:'#1163ea', backgroundColor:'#F0F7FF'}}>For Teams of all sizes</h4>
                        <div className="col-12 col-lg-12 mt-4 headlineresponselite Teams_compare">
                              
                              <div className="d-flex flex-row align-items-start">
                           
                                  <div className="..">
                                      <Image src={Streamline_Date} className="img-fluid" alt=""  style={{width:"60px", height:'50px'}}/>
                                  </div>
                                  <div className="ms-3">
                                      <h5 className="text-black fw-bold  ps-2 literesponsefont">Streamlined Data Management</h5>
                                      <p className="text-black-max-width ps-2 mt-2 ">
                                          Utilize predefined templates and protocols, or easily
                                          import your existing experimental templates into the ELN
                                          as Excel, JSON, or Word files, ensuring complete
                                          traceability.
                                      </p>
                                  </div>
                            
                              </div>
                       </div>
                       <div className="col-12 col-lg-12 mt-4 Teams_compare">
                            <div className="d-flex flex-row align-items-center">
                                

                                <div className="align-self-start">
                                <Image src={Manage_Project} className="img-fluid" alt="" style={{width:"60px", height:'50px'}}/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="text-black fw-bold  ps-2 mt-2 literesponsefont">Manage projects and tasks</h5>
                                    <p className="text-black-max-width ps-2 mt-2">
                                    Easily manage projects and tasks with configurable
                                    workflows. Use folders and files for quick access and better
                                    organization.
                                    </p>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 mt-4 Teams_compare">
                                <div className="d-flex flex-row align-items-center mt-4 pt-4 litebannercol">
                                
                                    <div className="align-self-start">
                                    <Image src={Automate_Encrypt} className="img-fluid" alt="" style={{width:"60px", height:'50px'}}/>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-black fw-bold  ps-2 literesponsefont">Automate, Encrypt- Protect</h5>
                                        <p className="text-black-max-width ps-2 ">
                                        Maintain complete control over who accesses your data
                                        and what happens to it. Ensure that your data is fully
                                        protected and encrypted both at rest and in transit.
                                        </p>
                                    </div>
                                  
                                    
                                </div>
                        </div>
                        </div>
                      <div className="col-lg-6 smart-compare">
                      <h4 className="text-left fw-bold mb-4 py-3 ps-5 headlineresponselite Teams_compare" style={{color:'#1163ea', backgroundColor:'#F0F7FF'}}>Designed for Researchers & Academicians</h4>
                      <div className="col-12 col-lg-12 ps-5 Teams_compare">
                        
           
                            <div className="d-flex flex-row align-items-center">                            
                                <div className="align-self-start">
                                    <Image src={centralized_Data} className="img-fluid" alt="" style={{width:"60px", height:'50px'}}/>
                                </div>
                                <div className="ms-3">
                               
                                    <h5 className="text-black fw-bold ps-2 literesponsefont">Centralized Data Repository</h5>
                                    <p className="text-black-max-width ps-2 mt-2">
                                    Record and track experiments, manage inventory, and retrieve
                                    information easily from one secure & accessible platform.
                                    </p>
                                </div>
                          
                                
                            </div>
                        </div>                   
                        <div className="col-12 col-lg-12 mt-4 ps-5 Teams_compare">
                            <div className="d-flex flex-row align-items-center">
                                
                                <div className="align-self-start">
                                <Image src={Effortless_Collaboration} className="img-fluid" alt="" style={{width:"60px", height:'50px'}} />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="text-black fw-bold mt-2 ps-2 literesponsefont">Effortless collaboration</h5>
                                    <p className="text-black-max-width ps-2 mt-2">
                                    With features that support real-time collaboration, it allows academic teams to work together. 
                                    Researchers can share notes, data, & findings, promoting effective teamwork and improving project outcomes.
                                    </p>
                                </div>
                        
                                
                            </div>
                        </div>         
                        <div className="col-12 col-lg-12 mt-4 ps-5 Teams_compare">
                                <div className="d-flex flex-row align-items-center">
                                    
                                    <div className="align-self-start">
                                       <Image src={Sample_Management} className="img-fluid" alt="" style={{width:"60px", height:'50px'}}/>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-black fw-bold  mt-2 ps-2 literesponsefont">Material & Sample Management</h5>
                                        <p className="text-black-max-width ps-2 mt-2">
                                        Use a unified solution for managing lab resources and
                                        samples. Create and manage material repositories, track
                                        stock levels, usage, reorder levels, and expiry dates.
                                        </p>
                                    </div>                                    
                                </div>
                        </div>  
                      </div>                                      
                    </div>
               </div>
      </div>
      <div className=" container compare-bg-gradiant mt-5 py-4 compare-cta">
         <div className="row">
              <div className="col-lg-8 d-flex flex-column justify-content-center align-items-center py-2">
                <h4 className="text-white f_700 text-center compare-Kickstart py-2" style={{maxWidth:'612px',lineHeight:'1.4'}}>Kickstart Your Research with a 30-Day Free Trial of Cloud-Based – Logilab ELN Lite </h4>
                {/* <p className="Ensure-sub">Academicians enjoy an
                extended 30 days Trail</p> */}
              </div> 
              {/* <Image src={compare_arrow} alt="lite" className="img-fluid w-100"/> */}
              <div className="col-lg-4 Kickstart-btn-mt">
              <div className="d-flex justify-content-center align-items-center py-2">
                                      <div className="action_btn job-button text-md Registorheader py-2">
                                          <Link href="https://logilabelnlite.azurewebsites.net/register" className="btn btn--blue">TRY NOW</Link>
                                      </div>
                              </div>
                  </div> 
          </div> 
      </div>  
      </div> 
    </div> 
         
    <div className="container mt-5">
      <div className="sec_title">
         {/* <h2 className="text-center text-black fw-bold">More than a Lab Notebook</h2> */}
         <h4 className="ms-3 text-center text-black f_700">Cloud-based Electronic lab notebook trusted by the world’s leading industries and  Scientific Research Organizations</h4>
       </div>  
    </div>
    <div className="container mt-5">
             <LiteSlider/>
    </div>

    <div className="testimonial-slider-area lite">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_40">
              </div>
            </div>
              <Litetestimonials/>
          </div>
        </div>
    </div>
           
     <div className="bg-lblue py-5 litebannercol">
    <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 ">
            <div className="ms-5 litectcresponsive">
               <h2 className="f_800 text-black py-3 litetext">Frequently Asked Questions</h2>
               <div className="responsivecta">
                <p className="fw-bold text-black">Haven't found what you're loooking for</p>
                <div className="litebtn action_btn job-button text-md Registorheader">
                <a className="btn btn--blue " href="/contact-us">Contact Us</a></div>
               </div>
              
            </div>
          
          </div>
          <div className="col-12 col-lg-6">
          <section className="compare ">
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
            How can I get started with Logilab ELN Lite? 
            </Accordion.Header>
            <Accordion.Body>
            Getting started is quick and easy. Simply visit the registration page, sign up with your email or log in using Google/Microsoft, and start using the platform. With preconfigured templates and helpful guides, labs can begin working within minutes.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
            How easy is the transition from paper-based systems? 
            </Accordion.Header>
            <Accordion.Body>
            Logilab ELN Lite makes transitioning from paper-based systems, Excel, or MS Word seamless. It allows users to import existing documents, minimizing disruptions and enabling labs to quickly adapt to the digital platform while continuing their work.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
            How does Logilab ELN Lite ensure data security? 
            </Accordion.Header>
            <Accordion.Body>
            Logilab ELN Lite follows industry-standard security protocols to protect your data. It includes role-based access control, encrypted storage, and secure cloud backups, ensuring that lab data is safe and accessible only to authorized users. 
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
            What are the upgrade options available?  
            </Accordion.Header>
            <Accordion.Body>
            As your lab’s needs grow, you can easily upgrade from Logilab ELN Lite to the standard/premium version. The upgrade unlocks advanced features like regulatory compliance, audit trail, multistep workflows, and enhanced inventory management. All data, settings, and workflows transfer seamlessly without retraining.
            </Accordion.Body>
          </Accordion.Item>          
        </Accordion>  
         
        <br /><br />
      </div>
    </section> 
          </div>
        
        </div> 
       
      </div>
     </div>   

     <div className="cont lite compare-cta calender_cont ">
       <div className="Devepoe_space">
                    <div className="">
                      <div className='container tab2'>
                        <div className="row">
                          <div className="col-lg-7 d-flex request-demo">
                            <div className=" text-center logpositionchange">
                                <h3 className="Ensure f_800 l_height15 text-white">Heve further Questions ? Reach Out the team
                                </h3>
                                <div className="d-flex justify-content-center align-items-center mt-4">
                                    <div className="action_btn job-button text-md">
                                      <Link href="https://logilabelnlite.azurewebsites.net/register" className="btn btn--blue  ">Contact Us</Link>
                                    </div>
                                    <div className="action_btn job-button text-md Registorheader">
                                      <Link href="/pricing" className="btn btn--blue ms-4">Download Brochure</Link>
                                    </div>
                                  </div>
                                </div>
                          </div>

                            <div className="col-lg-5  ps-5">    
                              <Image src={support_person } className="img-fluid  w-100 compare-imgae-two" 
                              alt="Adopt Agaram's Logilab Electronic Lab Notebook to centralize your research 
                              data and stay compliant to 21 CFR Part 11, ALCOA principles, etc."/>                
                            </div>
                        </div>                     
                      </div>
                    </div>
                  </div>
    </div>          
       <Footer/> 
  </div>
  
);
}
