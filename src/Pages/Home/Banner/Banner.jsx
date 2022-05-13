import React from "react";
import jerin from "../../../Assets/Image/jerin.png";

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-200 mt-16 lg:mt-0">
      <div class="hero-content flex-col lg:flex-row-reverse gap-y-12 lg:gap-x-32 py-12 lg:py-0">
        <img
          src={jerin}
          class="max-w-full md:max-w-md lg:w-max-full rounded-lg"
          alt=""
        />
        <div className="lg:px-6 lg:leading-[2.5rem]">
          <h1 class="text-5xl font-bold mb-2">BEAUTY SALON</h1>
          <h1 class="text-5xl font-bold">FOR EVERY WOMEN</h1>
          <p class="py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            <br />
            commodo ipsum duis laoreet maecenas. Feugiat commodo <br /> ipsum
            duis laoreet maecenas. Feugiat
          </p>
          <button class="btn btn-primary text-white">Get an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
