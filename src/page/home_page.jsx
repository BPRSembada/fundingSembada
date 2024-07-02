import React from "react";
import "../css/home_page.css";
import { Table, InputGroup, Form, Button } from "react-bootstrap";
import KalkulatorDeposito from "../component/calkulator";
import Testimoni from "../component/testimoni";
import { MdOutlineAccountCircle, MdOutlineDateRange } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

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
                  <h3>Lorem ipsum dolor</h3>
                  <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur</li>
                    <li>Lorem ipsum dolor sit, amet consectetur</li>
                    <li>Lorem ipsum dolor sit, amet consectetur</li>
                    <li>Lorem ipsum dolor sit, amet consectetur</li>
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
                  <h3>Lorem ipsum dolor</h3>
                  <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur</li>
                    <li>Lorem ipsum dolor sit, amet consectetur</li>
                    <li>Lorem ipsum dolor sit, amet consectetur</li>
                    <li>Lorem ipsum dolor sit, amet consectetur</li>
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
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <form action="">
              <h2>Ajukan Bunga Deposito Anda</h2>
              <Form.Label className="form_label">Nama</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <MdOutlineAccountCircle />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Nama"
                  aria-label="Nama"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <Form.Label className="form_label">No Handphone</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  {" "}
                  <FiPhone />
                </InputGroup.Text>
                <Form.Control
                  placeholder="No Handphone"
                  aria-label="No HP"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <Form.Label className="form_label">Nominal</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                <Form.Control
                  placeholder="Nominal"
                  aria-label="Nominal"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <Form.Label className="form_label">Tenor</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <MdOutlineDateRange />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Tenor"
                  aria-label="Tenor"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <Form.Label className="form_label">Bunga</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                <Form.Control
                  placeholder="Bunga"
                  aria-label="Bunga"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <div>
                <Button variant="danger" className="me-4">
                  Ajukan Sekarang
                </Button>
                <Button variant="danger">Kalkulator Deposito</Button>
              </div>
            </form>
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
        <Testimoni />
      </div>
    </div>
  );
};

export default HomePage;
