import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='col-md-12 home-sec-1 row'>
        <div className='col-md-6 home-sec-img-div'>
            <img src="https://demo.themefisher.com/gymfit/images/bg/bg-5.jpg" alt="" />
        </div>

        <div className='col-md-6 home-sec-txt-div'>
<h2>
WE’VE SKILL <br />
IN WIDE <span className='textcolor'> RANGE OF FITNESS </span>AND OTHER BODY HEALTH FACILITY.
</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in.</p>
<button className='join-us-btn'>learn more</button>
        </div>
        </div>
        
        <div className='home-sec-2'>
            <div>
           <p>DSCOVER YOUR POTENTIAL</p>
           <h1>BOOK YOUR EARLY SEAT TO GET</h1>
           <h1><span className='h-child-2'>SUMMER 25% </span> DICSOUNT</h1>
            </div>
        </div>
        <div className='home-sec-3 pb-5'>
            <h1 className='pt-5'>OUR <span className='h-child-2'> SERVICES</span></h1>
            <p>We offer more than 35 group exercis, aerobic classes each week.</p>
                <div className='col-md-12 services-col2 d-flex row'>
                    <div className='col-md-4 services-col6 '>
                    <i class="fa fa-dumbbell fa-2x mt-2 exicon"></i>
                    <h4 class="mt-3 mb-4 text-uppercase">WEIGHT LIFTING</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
                    </div>

                    <div className='col-md-4 services-col6'>
                    <i class="fa fa-bicycle fa-2x mt-2 exicon"></i>
                    <h4 class="mt-3 mb-4 text-uppercase">CYCLING</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
                    </div>

                    <div className='col-md-4 services-col6'>
                    <i class="fa fa-heart fa-2x mt-2 exicon"></i>
                    <h4 class="mt-3 mb-4 text-uppercase">YOGA MEDIDATION</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
                    </div>


                    <div className='col-md-4 services-col6'>
                    <i class="fa fa-dumbbell fa-2x mt-2 exicon"></i>
                    <h4 class="mt-3 mb-4 text-uppercase">BUILDING BODY</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
                    </div>

                    <div className='col-md-4 services-col6'>
                    <i class="fa fa-heart fa-2x mt-2 exicon"></i>
                    <h4 class="mt-3 mb-4 text-uppercase">FITNESS TRACK</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
                    </div>


                    <div className='col-md-4 services-col6'>
                    <i class="fa fa-heart fa-2x mt-2 exicon"></i>
                    <h4 class="mt-3 mb-4 text-uppercase">FITNESS</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, molestias.</p>
                    </div>
                </div>
        </div>
        <div className='home-sec-4'>
        <h1 className='pt-5'>OUR <span className='h-child-2'> GALLERY</span></h1>
            <p className='m-0 pb-5'>We offer more than 35 group exercis, aerobic classes each week.</p>
            <div className='col-md-12 gallery-col2 d-flex row'>
            <div className='col-md-4 gallery-col6'>
            <img src="images\gallery\gallery-07.jpg" height={"300px"} alt="" />
            </div>
            <div className='col-md-4 gallery-col6'>
            <img src="images\gallery\gallery-06.jpg" height={"300px"} alt="" />
            </div>
            <div className='col-md-4 gallery-col6'>
            <img src="images\gallery\gallery-04.jpg" height={"300px"} width={"425px"} alt="" />
            </div>
            <div className='col-md-4 gallery-col6'>
                <img src="images\gallery\gallery-01.jpg" height={"300px"} alt="" />
            </div>
            <div className='col-md-4 gallery-col6'>
            <img src="images\gallery\gallery-03.jpg" height={"300px"} alt="" />
            </div>
            <div className='col-md-4 gallery-col6'>
            <img src="images\gallery\gallery-05.jpg" height={"300px"} width={"425px"} alt="" />
            </div>
        </div>
        </div>
   
    </>
  )
}

export default Home