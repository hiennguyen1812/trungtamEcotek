import { Link, useParams } from "react-router-dom";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useRef } from "react";
import dataAccount from "../../Account/data";
import dataTeacher from "../../Teacher/TeacherList/data";

const SideBar = () => {
  const paramsSidebar = useParams();
  const categories = [
    { name: "Home", route: "/home" },
    { name: "Giáo viên", route: `/teacher/${paramsSidebar.MaCSDT}` },
    { name: "Tài khoản", route: `/account/${paramsSidebar.MaCSDT}` },
    // { name: "Thanh toán", route: `/payment/${paramsSidebar.MaCSDT}` },
  ];

  // Find the selected category based on the route parameters
  const selectedCategory = categories.find(
    (category) =>
      (category.route === "/" && paramsSidebar.MaCSDT === undefined) ||
      (paramsSidebar.MaCSDT !== 
        undefined && 
        category.route.includes(`/account/${paramsSidebar.MaCSDT}`))
  );

  return (
    <div className="sidebar">
      {categories.map((category, index) => (
        <Link to={category.route} key={index}>
          <div
            className={`btn cat_btn ${
              selectedCategory && selectedCategory.route === category.route
                ? "active"
                : ""
            }`}
          >
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
