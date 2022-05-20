import React, { Fragment } from "react";
import client1 from "../../../Assets/Image/client-1.png";
import client2 from "../../../Assets/Image/client-2.png";
import client3 from "../../../Assets/Image/client-3.png";
import star from "../../../Assets/Icon/star.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      image: client1,
      name: "Nash Patrik",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
    {
      image: client2,
      name: "Miriam Barron",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
    {
      image: client3,
      name: "Bria Malone",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
    {
      image: client1,
      name: "Nash Patrik",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
    {
      image: client2,
      name: "Miriam Barron",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
    {
      image: client3,
      name: "Bria Malone",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
    {
      image: client2,
      name: "Miriam Barron",
      title: "CEO, Manpol",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
  ];

  return (
    <Fragment>
      <div className="py-24 lg:px-24">
        <h1 className="text-3xl lg:text-4xl text-center font-bold pb-28">
          Testimonials
        </h1>
        <Swiper
          style={{ paddingBottom: "4.5rem" }}
          autoplay={true}
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          grabCursor={true}
          modules={[Pagination]}
        >
          {testimonials.map(({ image, name, title, text }, index) => {
            return (
              <SwiperSlide
                className="card w-full bg-base-100 shadow-xl px-6 rounded-md"
                key={index}
              >
                <div className="flex items-center content-center gap-4 mx-auto mr-28">
                  <div>
                    <img src={image} alt="Shoes" className="rounded-xl w-16" />
                  </div>
                  <div>
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">{title}</h2>
                  </div>
                </div>
                <div className="card-body items-center text-start px-6">
                  <p>{text}</p>
                  <div className="flex mr-48">
                    <img src={star} alt="star" className="w-6" />
                    <img src={star} alt="star" className="w-6" />
                    <img src={star} alt="star" className="w-6" />
                    <img src={star} alt="star" className="w-6" />
                    <img src={star} alt="star" className="w-6" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default Testimonials;
