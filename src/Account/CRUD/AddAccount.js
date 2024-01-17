import Card from "../../components/Card";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./AddAccount.css"


const AddAccount = (props) => {
  const [valueAcc, setValueAcc] = useState({
    AccountName: "",
    MaDV: "",
    Password: "",
  });

  const [formVisible, setFormVisible] = useState(false);

  const onChangeAccount = (e) => {
    const newValueTeacher = e.target.value;
    const fieldAccount = e.target.name;
    setValueAcc((prev) => {
      return {
        ...prev,
        [fieldAccount]: newValueTeacher,
      };
    });
  };

  if(!formVisible) {
    return (
        <button className="btn primary"
        onClick={() => {
            setFormVisible(true);
        }}>
            Thêm mới
        </button>
    )
}

  const handleSubmitAccount = (event) => {
    event.preventDefault();
    props.onSubmit(valueAcc);
  };

  return (
    <Card className="add_form_acc">
      <form onSubmit={handleSubmitAccount} className="">
        <Form.Control
          name="AccountName"
          value={valueAcc.AccountName}
          onChange={onChangeAccount}
          type="text"
          placeholder="Tài khoản"
        />
        <Form.Control
          name="MaDV"
          value={valueAcc.MaDV}
          onChange={onChangeAccount}
          type="text"
          placeholder="Mã đơn vị"
        />
        <Form.Control
          name="Password"
          value={valueAcc.Password}
          onChange={onChangeAccount}
          type="text"
          placeholder="Mật khẩu"
        />

        <div className="add_form_action">
          <button type="submit" size="sm" className="btn primary">
            Thêm mới
          </button>
          <button
            className="btn primary"
            size="sm"
            onClick={() => {
              setFormVisible(false);
            }}
          >
            Thoát
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddAccount;
