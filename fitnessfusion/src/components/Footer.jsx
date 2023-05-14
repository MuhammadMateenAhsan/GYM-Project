import React from 'react'

const Footer = () => {
  return (
    <>
    {/* <footer>
        <div className='row mr-0'>
            <div className='col-md-12 footer-col12'> 
            <div className='col-md-6 footer-col6-first'>
                <h4>Contact Us</h4>
                <ul>
                    <li><a href='mailto:envkt@example.com'>Email Us</a></li>
                    <li><a href='https://www.linkedin.com/in/jessica-harris-12b10b160/'>LinkedIn</a></li>
                    <li><a href='https://github.com/jessicaharris'>Github</a></li>
                </ul>
            </div>
            <div className='col-md-6 footer-col6-second'>
                <h4>Social Media</h4>
                <ul>
                    <li><a href='https://www.facebook.com/jessicaharris/'>Facebook</a></li>
                    <li><a href='https://www.instagram.com/jessicaharris/'>Instagram</a></li>
                    <li><a href='https://twitter.com/jessicaharris'>Twitter</a></li>
                </ul>
            </div>
            
        </div>
        
        </div>
        <div className='footer-copyright text-center py-3 copywrite'>
                    <p>Copyright &copy; 2023</p>
    
            </div>
    </footer> */}


<footer className="footer pt-5 p-0 text-white">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <h5 className="text-uppercase mb-4 textcolor">Company name</h5>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          nisi euismod, aliquet ipsum vel, rhoncus tellus. Nullam varius leo sit
          amet magna mollis, vel maximus lorem volutpat. Sed semper lorem ut
          lorem fermentum, vel blandit orci fringilla.{" "}
        </p>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <h5 className="text-uppercase mb-4 textcolor">Useful links</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
          <li>
            <a href="#">Link 4</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <h5 className="text-uppercase mb-4 textcolor">Contact us</h5>
        <ul className="list-unstyled">
          <li>
            <i className="fa fa-map-marker textcolor" /> 123 Main Street, New York, NY
            10001
          </li>
          <li>
            <i className="fa fa-phone textcolor" /> (123) 456-7890
          </li>
          <li>
            <i className="fa fa-envelope textcolor" /> info@example.com
          </li>
        </ul>
      </div>
    </div>
    <hr style={{backgroundColor:"tomato"}} />
    <div className="row align-items-center">
      <div className="col-md-6 small text-center text-md-left mb-3">
        © 2023 Company name. All Rights Reserved.
      </div>
      <div className="col-md-6 small text-center text-md-right">
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <a href="#" className='textcolor'>Privacy Policy</a>
          </li>
          <li className="list-inline-item">·</li>
          <li className="list-inline-item">
            <a href="#" className='textcolor'>Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer