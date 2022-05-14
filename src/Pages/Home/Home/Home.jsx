import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FacialBanner from "../FacialBanner/FacialBanner";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <FacialBanner></FacialBanner>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
