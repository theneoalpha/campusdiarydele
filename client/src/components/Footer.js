import React from 'react'

export default function Footer(props) {

  return (
    <>
     <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>About Us</h4>
              <p>MYTHBUSTERS....</p>
              <a className="navbar-brand logo_h d-none d-xl-block" href="index.html"><img src="img/campus_diary_logo.png" alt="campus_diary_logo" /></a>
            </div>
            <div className="col-xl-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Contact Info</h4>
              <ul>
                <li>Address: Jagadalpur</li>
                <li><a href>Phone: +91 12324343141</a></li>
                <li><a href="https://www.google.co.in/">Email: MythBusters121@gmail.com</a></li>
              </ul>
            </div>
            <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Important Link</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">View</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>
            <div className="offset-xl-1 col-xl-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Blogs</h4>
              <p><a href>Click here to Read Latest blogs</a></p>
            </div>
          </div>
          <div className="footer-bottom row align-items-center text-center text-lg-left">
            <p className="footer-text m-0 col-lg-8 col-md-12">
              Copyright @2022 All rights reserved  - MythBusters
            </p>
            <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
              <a href="#"><i className="ti-facebook" /></a>
              <a href="#"><i className="ti-twitter-alt" /></a>
              <a href="#"><i className="ti-dribbble" /></a>
              <a href="#"><i className="ti-linkedin" /></a>
            </div>
          </div>
        </div>
      </footer>
    
    
    
    </>
  )
}
