import { Link } from "react-router-dom";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Collapse from "react-bootstrap/Collapse";
import { useState, useRef } from "react";

const SideBar = () => {
  const [productOpen, setProductOpen] = useState(false);

  return (
    <div className="">
      <div className="row">
        <div className="header_sidebar bg-dark col-auto min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <Link className="text-decoration-none ms-4 text-white d-flex align-item-center ms-4 mt-3">
              <span className="fs-2 ms-3">SideBar</span>
            </Link>
            <br />
            <hr className="text-white d-none d-sm-block" />
            <ul className="nav nav-pills flex-column" id="parentM">
              <li className="nav-item my-1 ms-3">
                <Link to="/" className="nav-link text-white">
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>

              <li className="nav-item my-1 ms-3">
                <Link className="nav-link text-white" data-bs-toggle="collapse">
                  <i className="bi bi-grid"></i>
                  <span className="ms-3 d-none d-sm-inline">Product</span>
                  <i
                    className="bi bi-arrow-down-short ms-0"
                    onClick={() => setProductOpen(!productOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={productOpen}
                  ></i>
                </Link>
                <Collapse in={productOpen}>
                  <ul className="text-white my-1 mf-5 mt-10">
                    <NavDropdown.Item className="item1" href="#action/3.1">
                      test 1
                    </NavDropdown.Item>
                    <NavDropdown.Item className="item1" href="#action/3.2">
                      test 2
                    </NavDropdown.Item>
                    <NavDropdown.Item className="item1" href="#action/3.3">
                      test 3
                    </NavDropdown.Item>
                    <NavDropdown.Item className="item1" href="#action/3.4">
                      test 4
                    </NavDropdown.Item>
                  </ul>
                </Collapse>
              </li>

              <li className="nav-item my-1 ms-3">
                <Link className="nav-link text-white">
                  <i className="bi bi-house"></i>
                  <span className="ms-3 d-none d-sm-inline">House</span>
                </Link>
              </li>

              <li className="nav-item my-1 ms-3">
                <Link className="nav-link text-white">
                  <i className="bi bi-people"></i>
                  <span className="ms-3 d-none d-sm-inline">Customer</span>
                </Link>
              </li>

              <li className="nav-item my-1 ms-3">
                <Link to="/account" className="nav-link text-white">
                  <i className="bi bi-grid"></i>
                  <span className="ms-3 d-none d-sm-inline">Hệ thống</span>
                </Link>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
