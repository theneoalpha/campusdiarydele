import React from "react";
import Footer from "./Footer";
import "../components/assets/navbar.css";
import Navbar from './Navbar';

export default function Home() {
  return (
    <>
        <Navbar/>
    

        <section className="hero-banner text-center">
        <div className="container">
          <p className="text-uppercase">An Initiative</p>
          <h1>Know Your Seniors</h1>
          <p className="hero-subtitle">“The Spirit Never Ages. It Stays Forever Young.”</p>
          <a className="button button-outline" href="View.html">View</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a className="button button-outline " href="add me files/signup_page.html">Add Me</a>
        </div>
      </section>


      <Footer/>
    </>
  );
}
