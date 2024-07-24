import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/testimoniSwipe.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function TestimonSwipe() {
  const [setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
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
          922: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="testimonial">
            <img
              src="assets/lending/testimonial/nicholas-pratama.jpg"
              className="testimonial-img"
              alt="Testimonial"
            />
            <h3>Dr. Nicholas Pratama</h3>
            <strong>
              <i>Dokter Rumah Sakit Carolus</i>
            </strong>
            <p>
              Saya sangat terkesan dengan layanan Bank Sembada yang cekatan dan
              simpel. Selain mendapatkan keuntungan bunga deposito, dana saya
              aman, tidak ada rasa kuatir. Terimakasih atas layanan Bank
              Sembada, maju terus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img
              src="assets/lending/testimonial/anita.jpg"
              className="testimonial-img"
              alt="Testimonial"
            />
            <h3>Anita Tanata</h3>
            <strong>
              <i>Karyawan swasta</i>
            </strong>
            <p>
              Pengalaman pertama saya menempatkan deposito di Bank Sembada,
              proses cepat dan mudah, tidak berbelit-belit dan terjamin. Sukses
              terus Bank Sembada.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img
              src="assets/lending/testimonial/natasya.jpg"
              className="testimonial-img"
              alt="Testimonial"
            />
            <h3>Natasya</h3>
            <strong>
              <i>Karyawan swasta</i>
            </strong>
            <p>
              Terimakasih Bank Sembada telah memberikan pelayanan yang terbaik,
              saya merasa aman menempatkan dana saya di Bank Sembada karena
              dijamin LPS, funding officer nya ramah dan selalu siap melayani.
              Keuntungan lebih, bunganya sangat bersaing dengan bank lain.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
