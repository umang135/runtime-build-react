import React from 'react';
import ReactDOM from 'react-dom';

    const Appmixo = (props) => {
        return <>
<div id="header">
    <div class="text-center">
        <span class="testimonial light-purple">CLIENTS<span class="blue"> TESTIMONIALS</span></span>
    </div>
    <div class="client-close position-fixed">
        <a onClick={()=>{props.history.push("/")}}> <img src="/html/assets/images/Close.png" alt=""></img> </a>
    </div>
</div>
<div id="footer">
     <div class="text-center">
                <a href="#secondPage"><img src="/html/assets/images/down.png" alt=""></img> </a>
            </div>
            <div class="text-center client-btn">
                <a href="#!" class=" text-decoration-none ">Write Us on Google!</a>
    </div>
</div>

<div id="fullpage">
	<div class="section " id="section0">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-12">
                    <div class="client">
                        <div class="client-img text-center">
                            <img src="/html/assets/images/client-image.png" alt=""></img>
                        </div>
                        <div class="client-play">
                            <a href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-play-fill"></i></a> 
                         </div>
                    
                           

                           <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div class="modal-dialog modal-dialog-centered">
                               <div class="modal-content">
                                 <div class="modal-header">
                                   <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div class="modal-body">
                                    <iframe width="450" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> 
                                 </div>
                                 <div class="modal-footer">
                                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   <button type="button" class="btn btn-primary">Save changes</button>
                                 </div>
                               </div>
                             </div>
                           </div>
                         <div class="client-title">
                             <div><span>Marlin</span></div>
                             <div><p>EaStamp user</p></div>
                         </div>
                    </div>
                </div>
                <div class="col-lg-9 col-12 position-relative pt-lg-5">
                    <div class="client-testimonial">
                        <div class="testimonial-left">
                            <img src="/html/assets/images/comma-left.png" alt=""></img>
                        </div>
                        <div class="testimonial-circle-right">
                            <img src="/html/assets/images/right-icon.png" alt=""></img>
                        </div>
                        <div class="testimonial-title">
                            <span>Excellent App</span>
                        </div>
                        <div class="testimonial-reviews">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <div class="testimonial-desc">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting.</p>
                        </div>
                        <div class="testimonial-right">
                            <img src="/html/assets/images/comma-right.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
	<div class="section" id="section1">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-12">
                    <div class="client">
                        <div class="client-img text-center">
                            <img src="/html/assets/images/client-image.png" alt=""></img>
                        </div>
                        <div class="client-play">
                            <a href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-play-fill"></i></a> 
                         </div>
                    
                           
                          
                           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div class="modal-dialog modal-dialog-centered">
                               <div class="modal-content">
                                 <div class="modal-header">
                                   <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> 
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div class="modal-body">
                                    <iframe width="450" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> 
                                 </div>
                                 <div class="modal-footer">
                                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   <button type="button" class="btn btn-primary">Save changes</button>
                                 </div>
                               </div>
                             </div>
                           </div>
                         <div class="client-title">
                             <div><span>Marlin</span></div>
                             <div><p>EaStamp user</p></div>
                         </div>
                    </div>
                </div>
                <div class="col-lg-9 col-12 position-relative pt-lg-5">
                    <div class="client-testimonial">
                        <div class="testimonial-left">
                            <img src="/html/assets/images/comma-left.png" alt=""></img>
                        </div>
                        <div class="testimonial-circle-right">
                            <img src="/html/assets/images/right-icon.png" alt=""></img>
                        </div>
                        <div class="testimonial-title">
                            <span>Excellent App</span>
                        </div>
                        <div class="testimonial-reviews">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <div class="testimonial-desc">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting.</p>
                        </div>
                        <div class="testimonial-right">
                            <img src="/html/assets/images/comma-right.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
	<div class="section" id="section2">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-12">
                    <div class="client">
                        <div class="client-img text-center">
                            <img src="/html/assets/images/client-image.png" alt=""></img>
                        </div>
                        <div class="client-play">
                            <a href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-play-fill"></i></a> 
                         </div>
                    
                           
                           
                           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div class="modal-dialog ">
                               <div class="modal-content">
                                 <div class="modal-header">
                                   <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <div class="modal-body">
                                    <iframe width="450" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> 
                                 </div>
                                 <div class="modal-footer">
                                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   <button type="button" class="btn btn-primary">Save changes</button>
                                 </div>
                               </div>
                             </div>
                           </div>
                         <div class="client-title">
                             <div><span>Marlin</span></div>
                             <div><p>EaStamp user</p></div>
                         </div>
                    </div>
                </div>
                <div class="col-lg-9 col-12 position-relative pt-lg-5">
                    <div class="client-testimonial">
                        <div class="testimonial-left">
                            <img src="/html/assets/images/comma-left.png" alt=""></img>
                        </div>
                        <div class="testimonial-circle-right">
                            <img src="/html/assets/images/right-icon.png" alt=""></img>
                        </div>
                        <div class="testimonial-title">
                            <span>Excellent App</span>
                        </div>
                        <div class="testimonial-reviews">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <div class="testimonial-desc">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting.</p>
                        </div>
                        <div class="testimonial-right">
                            <img src="/html/assets/images/comma-right.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>
</>
}

export default Appmixo;