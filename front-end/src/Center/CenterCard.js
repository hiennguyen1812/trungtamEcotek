import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./CenterCard.css";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import dataCenter from "./CenterList/data";

const CenterCard = (props) => {
  const paramsCenter = useParams();
  const [lists, setLists] = useState(dataCenter);
  const navigate = useNavigate();

  const handleDelete = () => {
    const updatedLists = lists.filter(
      (center) => center.MaCSDT !== props.user.MaCSDT
    );
    setLists(updatedLists);
  };

  return (
    <div className="card_center">
      <div className="card_body">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Tên trung tâm</Card.Title>
            <Card.Text>{props.user.TenCSDT}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Mã CSDT: {props.user.MaCSDT} </ListGroup.Item>
            <ListGroup.Item>Ma so GTVT: {props.user.MaSoGTVT} </ListGroup.Item>
            <ListGroup.Item>Loai dich vu: {props.user.LoaiDV}</ListGroup.Item>
            <ListGroup.Item>
              Co quan quan ly: {props.user.CoQuanQuanLy}{" "}
            </ListGroup.Item>
            <ListGroup.Item>Dien thoai: {props.user.DienThoai} </ListGroup.Item>
            <ListGroup.Item>Địa chỉ: {props.user.DiaChi}</ListGroup.Item>
          </ListGroup>
          <div className="option">
            <Link to={`/center/${props.user.MaCSDT}`}>
              <Button variant="outline-primary">Update</Button>
            </Link>
            
              <Button variant="outline-danger" 
              onClick={() => handleDelete(props.user.MaCSDT)}>
                Delete
              </Button>
           
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CenterCard;
