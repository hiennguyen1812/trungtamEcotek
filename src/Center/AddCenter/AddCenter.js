import React, { useState } from "react"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./AddCenter.css"

const AddCenter = () => {
    const [value, setValue] = useState({
        nameTT: "",
        maDV: "",
        addressTT:"",
        IP: "",
    })

    const [formVisible, setFormVisible] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("value", value);
    }

    const handleValueChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value})
    }

    if(!formVisible) {
        return (
            <button className="form_visible"
            onClick={() => {
                setFormVisible(true);
            }}>
                Thêm mới
            </button>
        )
    }

    return (
        <div className="add_form">
            <form onSubmit={handleSubmit}>
                <div className="add-form_control">
                    <FloatingLabel controlId="floatingTextarea2" 
                    label="Tên trung tâm">
                        <Form.Control
                        name="nameTT"
                        value={value.nameTT}
                        onChange={handleValueChange}
                        className="input_form"
                        as="textarea"
                        style={{ height: '30px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" 
                    label="Mã đơn vị">
                        <Form.Control
                        name="maDV"
                        value={value.maDV}
                        onChange={handleValueChange}
                        className="input_form"
                        as="textarea"
                        // placeholder="Leave a comment here"
                        style={{ height: '30px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" 
                    label="Đia chỉ trung tâm">
                        <Form.Control
                        name="addressTT"
                        value={value.addressTT}
                        onChange={handleValueChange}
                        className="input_form"
                        as="textarea"
                        // placeholder="Leave a comment here"
                        style={{ height: '30px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" 
                    label="Địa chỉ IP">
                        <Form.Control
                        name="IP"
                        value={value.IP}
                        onChange={handleValueChange}
                        className="input_form"
                        as="textarea"
                        // placeholder="Leave a comment here"
                        style={{ height: '30px' }}
                        />
                    </FloatingLabel>
                </div>
                <div className="add-form_action">
                    <Button type="submit" size="sm">
                        Thêm mới
                    </Button>
                    <Button className="alternate" size="sm"
                    onClick={() => {
                        setFormVisible(false);
                    }}
                    >
                        Thoát
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AddCenter