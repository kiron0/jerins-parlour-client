import React from "react";
import Banner from "../Banner/Banner";
import FacialBanner from "../FacialBanner/FacialBanner";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <FacialBanner></FacialBanner>
      <Footer></Footer>
    </>
  );
};

export default Home;
