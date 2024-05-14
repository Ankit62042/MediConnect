import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
             Welcome to our revolutionary healthcare solution! At MediConnect, we're dedicated to transforming the way patients and doctors interact, making healthcare more accessible and convenient for everyone.
           Our mission is simple: to bridge the gap between patients and healthcare providers by leveraging cutting-edge technology. Gone are the days of lengthy waits and difficult appointments. With our app, scheduling appointments is a breeze, and finding the perfect doctor for your needs is easier than ever.
          We believe that everyone deserves quality healthcare, regardless of their location or circumstances. That's why we've created a platform that brings healthcare right to your fingertips. Whether you're seeking routine check-ups, specialized care, or simply need medical advice, our app connects you with experienced doctors who are ready to help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
