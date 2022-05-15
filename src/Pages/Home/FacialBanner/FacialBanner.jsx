import React from "react";
import facial from "../../../Assets/Image/facial.png";

const FacialBanner = () => {
  return (
    <section className="px-[10px] lg:px-0 md:px-[25px] mx-auto bg-base-200 py-16 md:py-12 lg:py-0">
      <div className="hero min-h-screen bg-cover bg-center bg-blend-overlay pb-[80px]">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <img
            src={facial}
            className="lg:w-1/2 w-full lg:h-auto h-100 object-cover object-center rounded"
            alt="treatment"
          />
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold mt-[-2rem] md:[-0rem] lg:[-0rem]">
              Let us handle your <br /> screen{" "}
              <span className="text-primary">Professionally</span>.
            </h1>
            <p className="py-12">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Purus commodo ipsum.
            </p>
            <div className="grid grid-cols-2">
              <div>
                <h1 className="text-primary font-bold text-6xl mt-4">500+</h1>
                <p className="mt-6 font-bold">Happy Customer</p>
              </div>
              <div>
                <h1 className="text-primary font-bold text-6xl mt-4">16+</h1>
                <p className="mt-6 font-bold">Total Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacialBanner;
