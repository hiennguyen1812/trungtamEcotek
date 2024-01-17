import React, { useState } from "react"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./AddCenter.css"
import DataCenter from "../CenterList/data"

const AddCenter = (props) => {
    const [value, setValue] = useState({
        MaCSDT: "",
        MaSoGTVT: "",
        TenCSDT:"",
        CoQuanQuanLy: "",
        DienThoai: "",
        DiaChi:"",
        LanhDao: ""
    })
    
    const [formVisible, setFormVisible] = useState(false)
    

    const onChange = (event) => {
        const newValue = event.target.value
        const field = event.target.name
        setValue((prev) => {
            return {
                ...prev,
                [field]: newValue,
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(value)

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
                    label="Ma CSDL">
                        <Form.Control
                        name="MaCSDT"
                        value={value.MaCSDT}
                        onChange={onChange}
                        className="input_form"
                        as="textarea"
                        style={{ height: '30px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" 
                    label="Ma GTVT">
                        <Form.Control
                        name="MaSoGTVT"
                        value={value.MaSoGTVT}
                        onChange={onChange}
                        className="input_form"
                        as="textarea"
                        style={{ height: '30px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" 
                    label="Loai dich vu">
                        <Form.Control
                        name="LoaiDV"
                        value={value.LoaiDV}
                        onChange={onChange}
                        className="input_form"
                        as="textarea"
                        style={{ height: '30px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" 
                    label="Tên trung tâm">
                        <Form.Control
                        name="TenCSDT"
                        value={value.TenCSDT}
                        onChange={onChange}
                        className="input_form"
                        as="textarea"
                        style={{ height: '30px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" 
                    label="Co so quan ly">
                        <Form.Control
                        name="CoQuanQuanLy"
                        value={value.CoQuanQuanLy}
                        onChange={onChange}
                        className="input_form"
                        as="textarea"
                        // placeholder="Leave a comment here"
                        style={{ height: '30px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" 
                    label="Dien thoai">
                        <Form.Control
                        name="DienThoai"
                        value={value.DienThoai}
                        onChange={onChange}
                        className="input_form"
                        as="textarea"
                        // placeholder="Leave a comment here"
                        style={{ height: '30px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" 
                    label="Địa chỉ">
                        <Form.Control
                        name="DiaChi"
                        value={value.DiaChi}
                        onChange={onChange}
                        className="input_form"
                        as="textarea"
                        // placeholder="Leave a comment here"
                        style={{ height: '30px' }}
                        />
                    </FloatingLabel>
                    
                </div>
                <div className="add-form_action">
                    <Button type="submit" size="sm" 
                    >
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