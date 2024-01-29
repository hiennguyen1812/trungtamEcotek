import Card from "../../components/Card";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { Link,useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Teacher = (props) => {
  const [option, setOption] = useState(false);
  const paramsTeacher = useParams();
  return (
    <Card
      className="faq"
      onClick={() => {
        setOption((prev) => !prev);
      }}
    >
      <div>
        <h5 className="faq_question">{props.teacher.teacherName}</h5>
        <button className="faq_icon">
          {option ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {option && (
        <div style={{ display: "block" }}>
          <br />
          <p className="faq_answer">
            Ngày tháng năm sinh: {props.teacher.teacherBirth}
          </p>{" "}
          <br />
          <p className="faq_answer">Ma CSDT: {props.teacher.MaCSDT}</p>
          <br />
          {/* <p className="faq_answer">Số CCCD: {props.teacher.CCCD}</p> */}
          <br />
          <p className="faq_answer">Mã giáo viên: {props.teacher.maGV}</p>
          <br />
          <p className="faq_answer">Tài khoản: {props.teacher.AccountName}</p>
          <br />
          <p className="faq_answer">Mã đơn vị: {props.teacher.MaDV}</p>
          <br />
          <p className="faq_answer">Mật khẩu: {props.teacher.Password}</p>
          <br />
          <div className="option_teacher">
          <Link to={`/payment/${props.teacher.maGV}`}>
              <Button
                variant="outline-success"
                // onClick={handleUpdate}
              >
                Payment
              </Button>
            </Link>
            <Link to={`/edit/${props.teacher.MaDV}`}>
              <Button
                variant="outline-primary"
                // onClick={handleUpdate}
              >
                Update
              </Button>
            </Link>
            <Button
              variant="outline-danger"
              // onClick={handleDelete}Payment
            >
              Delete
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Teacher;
