import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const [services] = useServices();
  return (
    <div className="py-24 lg:px-12">
      <h1 className="text-3xl lg:text-4xl text-center font-bold pb-16">
        Our Awesome <span className="text-primary">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mx-auto px-6 md:px-10 lg:px-20">
        {services.slice(6, 9).map(({ _id, img, title, description, price }) => (
          <div className="card w-full bg-base-100 px-4" key={_id}>
            <figure>
              <img src={img} alt="" className="rounded-xl w-100" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{title}</h2>
              <p className="card-text text-primary font-bold">${price}</p>
              <p className="card-text">{description}</p>
              <button className="btn btn-primary flex mx-auto mt-4 text-white rounded px-6">
                Buy Now
              </button>
            </div>
          </div>
        ))}
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
