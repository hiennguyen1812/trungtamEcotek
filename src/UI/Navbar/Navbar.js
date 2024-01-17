import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav_form">
      <Navbar expand="md">
        <Link to="/">
        <Image
          src="https://static.topcv.vn/company_covers/ZZUWWHxWjOrf5ISd9jS5.jpg"
          thumbnail
          className="img_logo"
          />
          </Link>

        <div className="nav_text">
          <Navbar.Brand className="nav_brand">
            Hệ Thống APP di động DAT - ECOTEK
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Tên người dùng" id="basic-nav-dropdown">
                <NavDropdown.Item className="account_change">
                  <Link to="/account">
                    <p>Đổi mật khẩu</p>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dang_xuat">
                  <Link to="/login">
                    <p>Đăng xuất</p>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
