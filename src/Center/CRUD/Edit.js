import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../UI/Navbar/Navbar";
import "./Edit.css";

const Edit = (props) => {

 

  return (
    <div>
      <NavBar />
      <div className="edit_form">
        <Form className="edit_form_box">
          <Row className="mb-3" 
          // onSubmit={handleSubmitEdit}
          >
            <p className="edit_form_p">Update thong tin</p>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Ten Trung Tam
              </Form.Label>
              <Col sm={10}>
                <Form.Control />
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
                // value={data.daDV} 
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
                // value={data.daDV} 
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
                // value={data.daDV} 
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
                // value={data.daDV} 
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
                // value={data.addressTT} 
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
                // value={data.LanhDao} 
                />
              </Col>
            </Form.Group>
          </Row>
          <div className="btn_edit mb-3">
            <Button variant="primary" type="submit" className="mb-2">
              Submit
            </Button>
            <Button variant="primary" className="mb-2">
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
