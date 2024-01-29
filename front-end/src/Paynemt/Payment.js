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
  teacher.maGV === params.maGV);

  return (
    <div>
      <NavBar />
      <SideBar 
       teacher={selectedTeacher} 
      />
      <br />
      <br />
      <br />
      <div className="payment_container">
        <h2>Tình trạng thanh toán của {params.maGV}</h2>
      </div>
      {selectedTeacher ? (
        <PaymentCard key={selectedTeacher.maGV} payment={selectedTeacher} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Payment;
