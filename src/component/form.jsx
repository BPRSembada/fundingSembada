import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { MdOutlineAccountCircle, MdOutlineDateRange } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useForm } from "react-hook-form";
import Axios from "axios";

const Form_funding = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      alert(result.message);
    } catch (error) {
      console.error(error);
      alert("There was an error submitting the form");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Form pengajuan Deposito</h2>
      <Form.Label className="form_label">Nama</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <MdOutlineAccountCircle />
        </InputGroup.Text>
        <Form.Control
          placeholder="Nama"
          aria-label="Nama"
          aria-describedby="basic-addon1"
          {...register("nama", { required: "Nama is required" })}
        />
      </InputGroup>
      <Form.Text>{errors.nama && <span>{errors.nama.message}</span>}</Form.Text>
      <Form.Label className="form_label">No Handphone</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FiPhone />
        </InputGroup.Text>
        <Form.Control
          placeholder="No Handphone"
          aria-label="No HP"
          aria-describedby="basic-addon1"
          {...register("no_hp", { required: "No HP is required" })}
        />
      </InputGroup>
      <Form.Text>
        {errors.no_hp && <span>{errors.no_hp.message}</span>}
      </Form.Text>
      <Form.Label className="form_label">Nominal</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
        <Form.Control
          placeholder="Nominal"
          aria-label="Nominal"
          aria-describedby="basic-addon1"
          {...register("nominal", { required: "Nominal is required" })}
        />
      </InputGroup>
      <Form.Text>
        {errors.nominal && <span>{errors.nominal.message}</span>}
      </Form.Text>
      <Form.Label className="form_label">Tenor</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <MdOutlineDateRange />
        </InputGroup.Text>
        <Form.Control
          placeholder="Tenor"
          aria-label="Tenor"
          aria-describedby="basic-addon1"
          {...register("tenor", { required: "Tenor is required" })}
        />
      </InputGroup>
      <Form.Text>
        {errors.tenor && <span>{errors.tenor.message}</span>}
      </Form.Text>
      <Form.Label className="form_label">Bunga</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
        <Form.Control
          placeholder="Bunga"
          aria-label="Bunga"
          aria-describedby="basic-addon1"
          {...register("bunga", { required: "Bunga is required" })}
        />
      </InputGroup>
      <Form.Text>
        {errors.bunga && <span>{errors.bunga.message}</span>}
      </Form.Text>
      <div>
        <Button variant="danger" className="me-4" type="submit">
          Ajukan Sekarang
        </Button>
        <Button variant="danger">Kalkulator Deposito</Button>
      </div>
    </form>
  );
};

export default Form_funding;
