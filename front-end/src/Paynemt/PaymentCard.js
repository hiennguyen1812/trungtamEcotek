import React, { useState, useEffect, useRef } from "react";
import Card from "../components/Card";

import "./Payment.css";

const PaymentCard = (props) => {
  const [updateHistory, setUpdateHistory] = useState([]);
  const [status, setStatus] = useState(false);
  const [expiryDate, setExpiryDate] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const countdownIntervalRef = useRef();

  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  const handleUpdateClick = () => {
    // Xóa interval cũ (nếu có)
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }

    const newUpdate = {
      dateTime: new Date(),
      expiryDate: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000),
      status: true,
    };

    setUpdateHistory((prevHistory) => [...prevHistory, newUpdate]);
    setStatus(true);

    const newExpiryDate = new Date();
    // Đặt thời hạn sử dụng là 30 ngày
    newExpiryDate.setDate(newExpiryDate.getDate() + 30);
    setExpiryDate(newExpiryDate);
  };

  useEffect(() => {
    // Thiết lập đếm ngược
    const countdownInterval = setInterval(() => {
      const now = new Date();

      // Kiểm tra xem expiryDate có giá trị không
      if (expiryDate) {
        const timeLeft = expiryDate.getTime() - now.getTime();

        // Kiểm tra xem thời hạn sử dụng đã hết hạn chưa
        if (timeLeft <= 0) {
          clearInterval(countdownInterval);
          setStatus(false);
          setCountdown("Hết hạn");
        } else {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

          setCountdown(`
            ${days} ngày
            ${hours} giờ
            ${minutes} phút
            ${seconds} giây
          `);
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);

          if (seconds === 0) {
            setMinutes(minutes - 1);
            if (minutes === 0) {
              setHours(hours - 1);
              if (hours === 0) {
                setDays(days - 1);
              }
            }
          }
        }
      }
    }, 1000);

    countdownIntervalRef.current = countdownInterval;

    return () => {
      clearInterval(countdownIntervalRef.current);
    };
  }, [expiryDate, updateHistory]);

  return (
    <div>
      <div className="container">
        <button className="btn btn-primary" onClick={handleUpdateClick}>
          Update
        </button>
        <br />
        <div className="payment_card">
          <h6 className="payment_card_text">
            Mã đơn vị
            <br />
            <br />
            <br />
            {props.payment.MaDV}{" "}
          </h6>
          <h6 className="payment_card_text">
            Mã giáo viên
            <br />
            <br />
            <br /> {props.payment.maGV}{" "}
          </h6>
          <h6 className="payment_card_text">
            Thời hạn sử dụng
            <br />
            <br />
            <br />
            {countdown
              ? `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`
              : "Chưa có cập nhật"}
          </h6>
          <h6 className="payment_card_text">
            Ngày update
            <br />
            <br />
            <br/>
            {updateHistory.length > 0
              ? updateHistory.map((update, index) => (
                  <div key={index}>{update.dateTime.toLocaleString()}</div>
                ))
              : "Chưa có cập nhật"}
          </h6>

          <h6 className="payment_card_text">
            Ngày hết hạn
            <br />
            <br />
            <br />
            {updateHistory.length > 0
              ? updateHistory.map((update, index) => (
                  <div key={index}>
                    {update.expiryDate
                      ? update.expiryDate.toLocaleString()
                      : "Chưa có cập nhật"}
                  </div>
                ))
              : "Chưa có cập nhật"}
          </h6>

          <h6 className="payment_card_text">
            Trạng thái
            <br />
            <br />
            <br />
            {status ? "Paid" : "Not Paid"}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
