import React from 'react';
import ReactDOM from 'react-dom';

    const Homepage = (props) => {

        return <>
        <div class="header  d-flex text-center justify-content-center align-items-center">
            <div class="header-mail d-flex align-items-center">
                <img src="/html/assets/images/Icon-simple-minutemailer.png" alt="" class="img-fluid"></img>
                <span>hello@appmixo.com</span>
            </div>
           <div class="header-phone d-flex align-items-center">
                <img src="/html/assets/images/Icon-material-phone-in-talk.png" alt=""></img>
                <span>+1-224.266.4283</span>
           </div>
        </div>

        <div class="main text-center">
            <div class="appmixo">
                <img src="/html/assets/images/appmixo.png" alt=""></img>
            </div>
            <div class="project-name  m-auto">
                <div class="position-absolute d-flex align-items-center flex-column">
                    <div class="project-title">
                        <span>Project Name</span>
                    </div>
                    <div class="project-desc">
                        <span class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies sollicitudin hendrerit. Sed blandit eros nec eros placerat, eu varius mauris fringilla.</span> 
                    </div>
                    <div class="project-btn">
                        <a href="#!" class="d-inline-block text-decoration-none">
                           <span>Start Project</span> 
                        </a>
                    </div>
                </div> 
            </div>
            <div class="rocket-chat d-inline-block">
                <a onClick={()=>{props.history.push("/testimonials")}} class="text-decoration-none">
                    <div>
                        <img src="/html/assets/images/Icon-rocketchat.png" alt=""></img>
                        <span>Client Testimonials</span>
                    </div>
                </a>
            </div>
        </div>
        
        <div class="footer d-flex justify-content-center align-items-center" id="mySidenav_sc">
             
            <div class="container">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-lg-6 col-12 d-flex align-items-center justify-content-center pb-lg-0 pb-md-2 pb-0">
                        <ul class="list-unstyled d-flex">
                            <li>
                                <a href="#!" class="text-decoration-none">About Us</a>
                            </li>
                            <li>
                                <a href="#!" class="text-decoration-none">Projects</a>
                            </li>
                            <li>
                                <a href="appmixo.html" class="text-decoration-none">Testimonials</a>
                            </li>
                            <li>
                                <a href="#!" class="text-decoration-none">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6  col-12 d-md-flex d-flex align-items-center justify-content-center">
                        <div class="flag-united-state d-flex align-items-center">
                            <div>
                                <img src="/html/assets/images/Flag-of-the-United-States.png" alt=""  class="img-fluid"></img>
                            </div>
                            <div class="flag-txt">
                                <span>AppMixo LLC, 16192 Coastal Highway, Lewes, DE 19958</span>
                            </div>
                                 
                        </div>
                        <div class="flag-india d-flex align-items-center">
                            <div>
                                <img src="/html/assets/images/Flag-India.png" alt=""  class="img-fluid"></img>
                            </div>
                            <div class="flag-txt">
                                <span>B/406, RJD Business Hub, Surat, Gujarat 395004</span>
                            </div>
                        </div>
                        <a href="javascript:void(0)" class="closebtn d-lg-none d-block text-decoration-none" onclick="closeNav()">&times;</a>
                    </div>
                </div>
            </div>
            
        </div>
        <span class="openbtn d-lg-none d-inline" onclick="openNav()">☰</span> 
        </>
        }

export default Homepage;