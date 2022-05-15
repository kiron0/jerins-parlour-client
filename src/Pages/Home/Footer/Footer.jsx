import React from "react";
import location from "../../../Assets/Icon/location.png";

const Footer = () => {
  return (
    <footer className="body-font bg-primary text-white">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col leading-loose">
        <div className="w-96 md:w-48 flex items-center content-center flex-shrink-0 md:mx-0 mx-auto text-center md:text-left gap-x-2">
          <img src={location} alt="" className="w-8 h-8" />
          <div>
            <p className="lg:mt-2 text-md">H#000 (0th Floor), Road #00,</p>
            <p className="text-md">New DOHS, Mohakhali, Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-2xl mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Project</a>
              </li>
              <li>
                <a href="/">Our Team</a>
              </li>
              <li>
                <a href="/">Terms Conditions</a>
              </li>
              <li>
                <a href="/">Submit Listing</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-2xl mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/">Quick Links</a>
              </li>
              <li>
                <a href="/">Rentals</a>
              </li>
              <li>
                <a href="/">Sales</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Our blog</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font text-2xl font-medium tracking-widest mb-3">
              About us
            </h2>
            <nav className="list-none lg:mb-10">
              <li className="md:mb-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat{" "}
                </p>
              </li>
              <li>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-6 lg:mt-6 justify-center sm:justify-start gap-8">
                  <a href="/">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="/" className="ml-3">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a href="/" className="ml-3">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a href="/" className="ml-3">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
