import React, { useState } from "react";
import { Link } from "react-router-dom";
import face from "../../../Assets/Icon/face.png";
import hair from "../../../Assets/Icon/hair.png";
import skin from "../../../Assets/Icon/skin.png";

const Services = () => {
  const [buy, setBuy] = useState(null);
  return (
    <div className="py-24 lg:px-12">
      <h1 className="text-3xl lg:text-4xl text-center font-bold pb-16">
        Our Awesome <span className="text-primary">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 mx-auto px-6 md:px-10 lg:px-32">
        <div className="card w-full bg-base-100 px-12">
          <figure className="px-10 pt-10">
            <img src={face} alt="Shoes" className="rounded-xl w-20" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Anti Age Face Treatment</h2>
            <p className="card-text text-primary font-bold">$199</p>
            <p className="card-text">
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </p>
            <button className="btn btn-primary flex mx-auto mt-4 text-white rounded">
              Buy Now
            </button>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl px-12 rounded-md">
          <figure className="px-10 pt-10">
            <img src={hair} alt="Shoes" className="rounded-xl w-20" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Hair Color & Styling</h2>
            <p className="card-text text-primary font-bold">$99</p>
            <p>
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </p>
            <button className="btn btn-primary flex mx-auto mt-4 text-white rounded">
              Buy Now
            </button>
          </div>
        </div>
        <div className="card w-full bg-base-100 px-12">
          <figure className="px-10 pt-10">
            <img src={skin} alt="Shoes" className="rounded-xl w-20" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Skin Care Treatment</h2>
            <p className="card-text text-primary font-bold">$299</p>
            <p className="card-text">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
            <button className="btn btn-primary flex mx-auto mt-4 text-white rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Link to="/all-services">
        <button className="btn btn-primary flex mx-auto mt-16 text-white rounded px-10">
          Explore More
        </button>
      </Link>
    </div>
  );
};

export default Services;
