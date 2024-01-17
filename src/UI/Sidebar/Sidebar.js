import { Link } from "react-router-dom";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useRef } from "react";

const SideBar = () => {

  return (
    <div className="sidebar">
      <Link to="/"><div className="btn cat_btn ">Home</div></Link>
      <Link to="/teacher"><div className="btn cat_btn">Giáo viên</div></Link>
      <Link to="/account"><div className="btn cat_btn">Tài khoản</div></Link>
      <Link to="/*"><div className="btn cat_btn">Thanh toán</div></Link>
    </div>
  );
};

export default SideBar;
