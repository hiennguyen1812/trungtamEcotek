import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import dataCenter from "./data";
import Row from "react-bootstrap/Row";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../UI/Navbar/Navbar";
import "./Edit.css";

const Edit = (props) => {
  

  return (
    <div>
      <div className="edit_form container">
        
        <Form className="edit_form_box ">
          <Row
            className="mb-3"
            // onSubmit={handleSubmitEdit}
          >
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Ten Trung Tam
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                type="text" value={props.user.TenCSDT} />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Ma CSDL
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                value={props.user.MaCSDT}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Ma so GTVT
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                value={props.user.MaSoGTVT}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Loai DV
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                value={props.user.LoaiDV}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Co quan quan ly
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                value={props.user.CoQuanQuanLy}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Dien thoai
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                value={props.user.DienThoai}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Dia chi
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                value={props.user.DiaChi}
                />
              </Col>
            </Form.Group>
          </Row>
          <div className="btn_edit mb-3">
            <Button variant="outline-primary" type="submit" className="mb-2">
              Submit
            </Button>
            <Button variant="outline-primary" className="mb-2">
              <Link to="/" className="link_cancel">
                Cancel
              </Link>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Edit;
