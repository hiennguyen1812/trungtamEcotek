import React from "react";
import NavBar from "../UI/Navbar/Navbar";
import SideBar from "../UI/Sidebar/Sidebar";
import "./Payment.css";
import dataTeacher from "../Teacher/TeacherList/data";
import PaymentCard from "./PaymentCard";
import { useParams } from "react-router-dom";
import NotFound from "../UI/NotFound";

const Payment = (props) => {
  const params = useParams();

  // Use the find function to get the teacher with matching maGV
  const selectedTeacher = dataTeacher.find((teacher) => 
  teacher.MaCSDT === params.MaCSDT);

  return (
    <div>
      <NavBar />
      <SideBar />
      <br />
      <br />
      <br />
      <div className="payment_container">
        <h2>Tình trạng thanh toán của {params.MaCSDT}</h2>
      </div>
      {selectedTeacher ? (
        <PaymentCard key={selectedTeacher.MaCSDT} payment={selectedTeacher} />
      ) : (
        <>
        </> 
      )}
    </div>
  );
};

export default Payment;
