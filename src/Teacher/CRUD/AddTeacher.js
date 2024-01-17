import Form from "react-bootstrap/Form";
import Card from "../../components/Card";
import "./AddTeacher.css";
import { useState } from "react";

const AddTeacher = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const [valueTeacher, setValueTeacher] = useState({
    teacherName: "",
    teacherBirth: "",
    CCCD: "",
    maGV: "",
  });
  if (!formVisible) {
    return (
      <p
        className="btn primary"
        onClick={() => {
          setFormVisible(true);
        }}
      >
        Thêm giáo viên
      </p>
    );
  }

  const onChangeTeacher = (e) => {
    const newValueTeacher = e.target.value;
    const fieldTeacher = e.target.name;
    setValueTeacher((prev) => {
      return {
        ...prev,
        [fieldTeacher]: newValueTeacher,
      };
    });
  };

  const handleSubmitTeacher = (event) => {
    event.preventDefault();
    props.onSubmit(valueTeacher);
  };

  return (
    <Card className="add_form_teacher">
      <form onSubmit={handleSubmitTeacher} className="g-1">
        <Form.Control
        name="teacherName"
        value={valueTeacher.teacherName}
          onChange={onChangeTeacher}
          type="text"
          placeholder="Họ và tên"
        />
        <Form.Control
        name="teacherBirth"
        value={valueTeacher.teacherBirth}
          onChange={onChangeTeacher}
          type="text"
          placeholder="Ngày tháng năm sinh"
        />
        <Form.Control
        name="CCCD"
        value={valueTeacher.CCCD}
          onChange={onChangeTeacher}
          type="text"
          placeholder="Số CCCD"
        />
        <Form.Control
        name="maGV"
        value={valueTeacher.maGV}
          onChange={onChangeTeacher}
          type="text"
          placeholder="Mã giáo viên"
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

export default AddTeacher;
