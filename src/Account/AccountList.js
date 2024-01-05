import NavBar from "../UI/Navbar/Navbar";
import SideBar from "../UI/Sidebar/Sidebar";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./AccountList.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const AccountList = (props) => {
  const jsonUrlAcc = 'https://github.com/hiennguyen1812/json/blob/main/dataAcc.json';
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [valueAcc, setValueAcc] = useState({
    // id: 0,
    AccountName: "",
    MaDV: "",
    Password:""
  })

  const onChangeAccount = (event) => {
    const newValueAcc = event.target.value
    const fieldAcc = event.target.name
    setValueAcc((prev) => {
      return {
        ...prev,
        [fieldAcc]: newValueAcc,
      }
    })
  }
  const handleSubmitAcc = (event) => {
    event.preventDefault();
    props.onSubmit(valueAcc)

}

  useEffect(() => {
    axios.get(jsonUrlAcc).then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  const handleAddAccount = (value) => {
    setRecords((prev) => [
      ...prev,
      {
        id: value.id,
        AccountName: value.AccountName,
        MaDV: value.MaDV,
        Password: value.Password,
      },
    ]);
  };

  return (
    <div onSubmit={handleAddAccount}>
      <NavBar />
      <div className="account_form">
        <SideBar />
        <div className="acc_head">
          <h2 className="mt-5 mb-5 account_text_header">Account List</h2>
          <Form onSubmit={handleSubmitAcc}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Tên tài khoản
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" onChange={onChangeAccount} placeholder="Tên tài khoản" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Mã đơn vị
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" onChange={onChangeAccount} placeholder="Mã đơn vị" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Mật khẩu
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" onChange={onChangeAccount} placeholder="Mật khẩu" />
              </Col>
            </Form.Group>
          </Form>
          <div className="btn_add">
            <Button variant="outline-success" type="submit" 
            >
              Add Account
            </Button>
          </div>
          <div className="container mt-5">
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  {/* Sử dụng các cột từ biến `columns` */}
                  {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                  ))}
                <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Sử dụng dữ liệu từ biến `records` */}
                {records.map((record, rowIndex) => (
                  <tr key={rowIndex}>
                      <td>{record.id}</td>
                      <td>{record.AccountName}</td>
                      <td>{record.MaDV}</td>
                      <td>{record.Password}</td>
                      <td>
                        <Button variant="outline-primary">Update</Button>{' '}
                        <Button variant="outline-danger">Delete</Button>
                      </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountList;
