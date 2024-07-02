import React from "react";
import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../css/detail_page.css";
// data lelang
import { DataLelang } from "../data/data_lelang";

// icon {
import { LuEye } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";

const DetailPage = () => {
  useEffect(() => {
    console.log(DataLelang[0].pict[1]);
  }, []);

  return (
    <div className="main-detail-page">
      <div className="cont-detail-pict">
        <div className="test">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="img_detai_lelang"
                src="/assets/lelang/unit_test/test_1.jpg"
                alt=""
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img_detai_lelang"
                src="/assets/lelang/unit_test/test_2.jpg"
                alt=""
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img_detai_lelang"
                src="/assets/lelang/unit_test/test_3.jpg"
                alt=""
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="body-detail-lelang">
        <div className="detail-kiri">
          <div className="deskripsi_lelang">
            <h2>Deskripsi</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              ipsum sunt molestias inventore eveniet eos, corporis, voluptate
              tempore et accusantium qui. Molestias soluta nam, praesentium
              animi obcaecati a labore voluptate?
            </p>
          </div>
          <div className="detail_lelang">
            <h2>Detail Properti</h2>
            <div className="isi_detail_lelang">
              <div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Luas tanah</p>
                  </div>
                  <div className="p2">
                    <p>:</p>
                  </div>
                  <div className="p3">
                    <p>156m2</p>
                  </div>
                </div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Luas bangunan</p>
                  </div>
                  <div className="p2">
                    <p>:</p>
                  </div>
                  <div className="p3">
                    <p>180m2</p>
                  </div>
                </div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>jumlah lantai</p>
                  </div>
                  <div className="p2">
                    <p>:</p>
                  </div>
                  <div className="p3">
                    <p>2Lt</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Kamar tidur</p>
                  </div>
                  <div className="p2">:</div>
                  <div className="p3">4Kt</div>
                </div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Kamar mandi</p>
                  </div>
                  <div className="p2">:</div>
                  <div className="p3">3Kt</div>
                </div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Ruang tamu</p>
                  </div>
                  <div className="p2">:</div>
                  <div className="p3">1Kt</div>
                </div>
              </div>
              <div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Status Bangunan</p>
                  </div>
                  <div className="p2">:</div>
                  <div className="p3">SHM</div>
                </div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Garasi</p>
                  </div>
                  <div className="p2">:</div>
                  <div className="p3">1 Mobil</div>
                </div>
                <div className="list_detail_lelang">
                  <div className="p1">
                    <p>Harga</p>
                  </div>
                  <div className="p2">:</div>
                  <div className="p3">Rp 1.800.000.000</div>
                </div>
              </div>
            </div>
          </div>
          <div className="map_lelang">
            <h2>Map</h2>
            <div className="cont-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7604439824418!2d106.82655527589817!3d-6.162828760401159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5db31cfffff%3A0xc40a2546a3af0783!2sAsean%20Tower!5e0!3m2!1sid!2sid!4v1715691507816!5m2!1sid!2sid"
                width="900"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="back">
            <a href="/">Back to Home</a>
          </div>
        </div>
        <div className="detail-kanan">
          <div className="lelang_baru">
            <h2>Daftar lelang</h2>
            <div className="cart_lelang_baru">
              <img src="/assets/lelang/unit_test/sekilas_lelang.jpg" alt="" />
              <div>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing </h4>
                <a href="">
                  <LuEye /> View more
                </a>
              </div>
            </div>
            <div className="cart_lelang_baru">
              <img src="/assets/lelang/unit_test/sekilas_lelang.jpg" alt="" />
              <div>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing </h4>
                <a href="">
                  <LuEye /> View more
                </a>
              </div>
            </div>
            <div className="cart_lelang_baru">
              <img src="/assets/lelang/unit_test/sekilas_lelang.jpg" alt="" />
              <div>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing </h4>
                <a href="">
                  <LuEye /> View more
                </a>
              </div>
            </div>
          </div>
          <div className="kategori_lelang">
            <h2>kategori</h2>
            <ol>
              <li>
                <a href="">Rumah</a>
              </li>
              <li>
                <a href="">Ruko</a>
              </li>
              <li>
                <a href="">Tanah</a>
              </li>
            </ol>
          </div>
          <div className="lelang_baru">
            <h2>Info Lebih Lanjut</h2>
            <div className="cart_lelang_baru">
              <img src="/assets/jill.jpg" alt="" />
              <div>
                <h4>Jill Michael W</h4>
                <a href="https://wa.me/6281280825138" target="blank">
                  <FaWhatsapp /> Whatsapp
                </a>
              </div>
            </div>
            <div className="cart_lelang_baru">
              <img src="/assets/beni.jpg" alt="" />
              <div>
                <h4>Beni Wijaya</h4>
                <a href="https://wa.me/6282122753683" target="blank">
                  <FaWhatsapp /> Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
