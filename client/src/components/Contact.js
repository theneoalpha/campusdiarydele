import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import contact from "../images/boy.svg";
import "../components/assets/contact.css";

import Footer from "./Footer";
export default function Contact() {
  // const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    skill: "",
    ig_username: "",
    linkdin: "",
    twitter: "",
    github: "",
    password: "",
    cpassword: "",
  });

  let name, value, PostData;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });

    PostData = async (e) => {
      
        res.send("Hellow ths is vikash");
    
      e.preventDefault();
      

      const { name, email, skill, ig_username, linkdin, twitter, github, password, cpassword } = user;
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          skill,
          ig_username,
          twitter,
          linkdin,
          github,
          password,
          cpassword,
        }),
      });

      const data = await res.json();
      if (res.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Registration successful");
        console.log("registration successful");
       
      }
    };
  };

  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="container mt-5">
           <h2 className="form-title">Register</h2>
          <div className="contact-content">
            <img src={contact} />
            <div className="contact-form">
             
              <form method="POST" className="contactpage-form">
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your name"
                    value={user.name}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="skill"></label>
                  <input
                    type="text"
                    name="skill"
                    id="skill"
                    placeholder="Enter Your Profession/Skills"
                    value={user.skill}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ig_username"></label>
                  <input
                    type="text"
                    name="ig_username"
                    id="ig_username"
                    placeholder="Enter Your Instagram Profile"
                    value={user.ig_username}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="linkdin"></label>
                  <input
                    type="text"
                    name="linkdin"
                    id="linkdin"
                    placeholder="Enter Your Linkdin Profile"
                    value={user.linkdin}
                    onChange={handleInputs}
                  />
                </div>
               
                <div className="form-group">
                  <label htmlFor="twitter"></label>
                  <input
                    type="text"
                    name="twitter"
                    id="twitter"
                    placeholder="Enter Your Twitter Profile"
                    value={user.twitter}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="github"></label>
                  <input
                    type="text"
                    name="github"
                    id="github"
                    placeholder="Enter Your Github Profile"
                    value={user.github}
                    onChange={handleInputs}
                  />
                </div>
              
                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter YourPassword"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword"></label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Enter Your cPassword"
                    value={user.cpassword}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="contact"
                    value="Submit"
                    className="submit"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>

            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
