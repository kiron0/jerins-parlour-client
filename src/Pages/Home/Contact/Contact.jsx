import React from "react";

const Contact = () => {
  return (
    <div className="py-24 lg:px-24 bg-base-200">
      <h1 className="text-3xl lg:text-4xl text-center font-bold pb-28">
        Let us handle your <br />
        project, professionally.
      </h1>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-base-100 bg-opacity-50 rounded focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div class="p-2 w-1/2">
            <div class="relative">
              <input
                type="text"
                id="text"
                name="text"
                class="w-full bg-base-100 bg-opacity-50 rounded  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-base-100 bg-opacity-50 rounded focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div class="p-2 w-1/2">
            <div class="relative">
              <input
                type="number"
                id="number"
                name="number"
                class="w-full bg-base-100 bg-opacity-50 rounded focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div class="p-2 w-full">
            <div class="relative">
              <textarea
                id="message"
                name="message"
                class="w-full bg-base-100 bg-opacity-50 rounded focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button className="btn btn-primary flex mx-auto text-white rounded px-10">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
