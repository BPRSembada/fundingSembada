import React from "react";
import "../css/home_page.css";
import { Table } from "react-bootstrap";
import TestimonSwipe from "../component/testimoniSwipe";
import Form_funding from "../component/form";

const HomePage = () => {
  return (
    <div>
      <div className="hero_home">
        <img src="assets/lending/hero_lending1.jpg" alt="" />
        <div className="caption_hero">
          <div className="left_hero">
            <img
              src="assets/lending/Hero.png"
              alt="hero_lending"
              className="img_hero"
            />
            <div className="cont_cart_promo">
              <div className="cartPromo">
                <img
                  src="assets/lending/promoKemerdekaan.png"
                  alt="promoKemerdekaan"
                  className="img_promo"
                />
                <div className="des_cartPromo">
                  <h3>PROMO KEMERDEKAAN</h3>
                  <ul>
                    <li>Penempatan Dana Minimal 100jt</li>
                    <li>60% Dana Untuk Deposito Dengan Bunga 6,75%</li>
                    <li>40% Dana Untuk Tabungan Dengan Bunga 4%</li>
                    <li>Periode Program s.d Agustus 2024</li>
                  </ul>
                </div>
              </div>
              <div className="cartPromo">
                <img
                  src="assets/lending/promoDepo.png"
                  alt="PromoDepo"
                  className="img_promo"
                />
                <div className="des_cartPromo">
                  <h3>BUNGA SUPER</h3>
                  <ul>
                    <li>Nominal Penempatan 500jt</li>
                    <li>Jangka Waktu Penempatan 6 Bulan</li>
                    <li>Suku Bunga 6,5% p.a.</li>
                    <li>Nasabah New To Bank</li>
                    <li>Masa Berlaku Program s.d 31 Agustus 2024</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="right_hero">
            <div>
              <h2>Counter Rate Deposito</h2>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Jangka Waktu</th>
                    <th>Suku BUnga Deposito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 Bulan</td>
                    <td>5,00% p.a.</td>
                  </tr>
                  <tr>
                    <td>3 Bulan</td>
                    <td> 5,25% p.a.</td>
                  </tr>
                  <tr>
                    <td>6 Bulan</td>
                    <td>5,50% p.a.</td>
                  </tr>
                  <tr>
                    <td>12 Bulan</td>
                    <td> 5,75% p.a.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            {/* form disini */}
            <Form_funding />
            {/* form disini */}
          </div>
        </div>
      </div>
      <div className="lending-section">
        <h2>Mengapa Deposito Sembada ?</h2>
        <div className="keunggulan">
          <div className="keunggulan_left">
            <img src="assets/lending/sembadaDepo.png" alt="" />
          </div>
          <div className="keunggulan_right">
            <ul>
              <li>
                Dikelola Manajemen dan Staf profesional bersertifikasi
                perbankan.
              </li>
              <li>Dijamin Lembaga Penjamin Simpanan</li>
              <li>Proses Cepat dengan bilyet 1 hari jadi.</li>
              <li>Layanan servis jemput dokumen</li>
            </ul>
          </div>
        </div>
        <div className="cont-testimonial">
          <TestimonSwipe />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
