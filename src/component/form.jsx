import React, { useState } from "react";
import { InputGroup, Form, Button, Modal } from "react-bootstrap";
import { MdOutlineAccountCircle, MdOutlineDateRange } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useForm } from "react-hook-form";
import Axios from "axios";
import "./css/form.css";

const Form_funding = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleClose = () => setShowModal(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw1qh9VP79Q5jxFXPCHg2q_Mo7ItbzM76tXjW1T6kFfVAJilhoLpO070YFJjzZYZP4/exec?action=insert",
        {
          redirect: "follow",
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      );

      const result = await response.json();
      console.log(result);
      setModalMessage(result.message);
      setShowModal(true);
      reset();
    } catch (error) {
      console.error(error);
      setModalMessage("There was an error submitting the form");
      setShowModal(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Form pengajuan Deposito</h2>
        <div className="formDepo">
          <Form.Label className="form_label">Nama</Form.Label>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">
              <MdOutlineAccountCircle />
            </InputGroup.Text>
            <Form.Control
              placeholder="Nama"
              aria-label="Nama"
              aria-describedby="basic-addon1"
              {...register("nama", { required: "Isi nama Anda Sesuai KTP" })}
            />
          </InputGroup>
          <Form.Text className="mb-3">
            {errors.nama && <span>{errors.nama.message}</span>}
          </Form.Text>
        </div>
        <div className="formDepo">
          <Form.Label className="form_label">No Handphone</Form.Label>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">
              <FiPhone />
            </InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="08xxxxxxxxxx"
              aria-label="No HP"
              aria-describedby="basic-addon1"
              {...register("no_hp", { required: "Isi nomor handphone Anda" })}
            />
          </InputGroup>
          <Form.Text className="mb-3">
            {errors.no_hp && <span>{errors.no_hp.message}</span>}
          </Form.Text>
        </div>
        <div className="formDepo">
          <Form.Label className="form_label">Nominal</Form.Label>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="ex:10.000.000"
              aria-label="Nominal"
              aria-describedby="basic-addon1"
              {...register("nominal", {
                required: "Isi jumlah penempatan dana",
              })}
            />
          </InputGroup>
          <Form.Text className="mb-3">
            {errors.nominal && <span>{errors.nominal.message}</span>}
          </Form.Text>
        </div>

        <div className="formDepo">
          <Form.Label className="form_label">Jangka Waktu</Form.Label>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">
              <MdOutlineDateRange />
            </InputGroup.Text>
            <Form.Control
              placeholder="Jangka Waktu"
              aria-label="Jangka Waktu"
              aria-describedby="basic-addon1"
              {...register("tenor", {
                required: "Isi jangka waktu penempatan",
              })}
            />
          </InputGroup>
          <Form.Text className="mb-3">
            {errors.tenor && <span>{errors.tenor.message}</span>}
          </Form.Text>
        </div>

        <div>
          <Button variant="danger" className="me-4" type="submit">
            Ajukan Sekarang
          </Button>
        </div>
      </form>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Data Tersimpan</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Form_funding;
