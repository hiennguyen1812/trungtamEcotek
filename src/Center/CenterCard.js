import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import "./CenterCard.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CenterCard = (props) => {

  const handleUpdate = () => {
    // Implement the logic for updating the center
    console.log("Update clicked for", props.user.nameTT);
  };

  const handleDelete = () => {
    // Implement the logic for deleting the center
    console.log("Delete clicked for", props.user.nameTT);
  };
    return (
      <div className='card_center'>
        {/* <AddCenter /> */}
        <div className='card_body'>
            <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Tên trung tâm</Card.Title>
              <Card.Text>
                {props.user.TenCSDT}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Mã CSDT: {props.user.MaCSDT} </ListGroup.Item>
              <ListGroup.Item>Ma so GTVT: {props.user.MaSoGTVT} </ListGroup.Item>
              <ListGroup.Item>Loai dich vu: {props.user.LoaiDV}</ListGroup.Item>
              <ListGroup.Item>Co quan quan ly: {props.user.CoQuanQuanLy} </ListGroup.Item>
              <ListGroup.Item>Dien thoai: {props.user.DienThoai} </ListGroup.Item>
              <ListGroup.Item>Địa chỉ: {props.user.DiaChi}</ListGroup.Item>
            </ListGroup>
            <div className='option'>
              <Link to={`/update/${props.user.MaCSDT}`}>
                <Button variant="outline-success" onClick={handleUpdate} >Update</Button>
              </Link>
              <Button variant="outline-danger" onClick={handleDelete} >Delete</Button>
            </div>
          </Card>
        </div>
      </div>
    )
}

export default CenterCard
