import React from "react";
import "./css/testimoni.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const Testimoni = () => {
  return (
    <div className="cont-testi">
      <Swiper
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 10,
          stretch: 50,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        }}
      >
        <SwiperSlide className="swiper-slide">
          <div className="testimonial">
            <img
              src="assets/lending/sembadaDepo.png"
              className="testimonial-img"
              alt="Testimonial"
            />
            <h3>Lorem ipsum dolor sit amet 1</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              repellendus assumenda vel excepturi ad facilis amet repudiandae
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="testimonial">
            <img
              src="assets/lending/sembadaDepo.png"
              className="testimonial-img"
              alt="Testimonial"
            />
            <h3>Lorem ipsum dolor sit amet 2</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              repellendus assumenda vel excepturi ad facilis amet repudiandae
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="testimonial">
            <img
              src="assets/lending/sembadaDepo.png"
              className="testimonial-img"
              alt="Testimonial"
            />
            <h3>Lorem ipsum dolor sit amet 3</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              repellendus assumenda vel excepturi ad facilis amet repudiandae
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial">
            <img
              src="assets/lending/sembadaDepo.png"
              className="testimonial-img"
              alt="Testimonial"
            />
            <h3>Lorem ipsum dolor sit amet 3</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              repellendus assumenda vel excepturi ad facilis amet repudiandae
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial">
            <img
              src="assets/lending/sembadaDepo.png"
              className="testimonial-img"
              alt="Testimonial"
            />
            <h3>Lorem ipsum dolor sit amet 3</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              repellendus assumenda vel excepturi ad facilis amet repudiandae
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial">
            <img
              src="assets/lending/sembadaDepo.png"
              className="testimonial-img"
              alt="Testimonial"
            />
            <h3>Lorem ipsum dolor sit amet 3</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              repellendus assumenda vel excepturi ad facilis amet repudiandae
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial">
            <img
              src="assets/lending/sembadaDepo.png"
              className="testimonial-img"
              alt="Testimonial"
            />
            <h3>Lorem ipsum dolor sit amet 3</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              repellendus assumenda vel excepturi ad facilis amet repudiandae
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimoni;
