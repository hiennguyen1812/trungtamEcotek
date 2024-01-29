import Card from "../components/Card";

import "./Payment.css";

const PaymentCard = (props) => {
  return (
    <div>
      <div className="container">
        <br />
        <div className="payment_card">
          <h6>
            Mã đơn vị 
            <br /> 
            <br /> 
            <br /> 
            {props.payment.MaDV}{" "}
          </h6>
          <h6>
            Mã giáo viên
            <br /><br /> 
            <br />  {props.payment.maGV}{" "}
          </h6>
          <h6>
            Thời hạn sử dụng
            <br />
            <br /> 
            <br /> {" "}
          </h6>
          <h6>
            Ngày hết hạn
            <br />
            <br /> 
            <br /> {" "}
          </h6>
          <h6>
            Trạng thái
            <br />
            <br /> 
            <br /> 
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
