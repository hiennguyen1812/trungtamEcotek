import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className='nav_form'>
      <Navbar expand="md" >
        <Image src="https://static.topcv.vn/company_covers/ZZUWWHxWjOrf5ISd9jS5.jpg" thumbnail className='img_logo'  />

        <div className='nav_text'>
          <Navbar.Brand className='nav_brand'>
            Hệ Thống APP di động DAT - ECOTEK
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
              
              <NavDropdown title="Tên người dùng" id="basic-nav-dropdown">

                <NavDropdown.Item>
                  Đổi mật khẩu
                  </NavDropdown.Item>
                <NavDropdown.Item className='dang_xuat'>
                  <Link to="/login">
                    <p>
                      Đăng xuất
                    </p>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </div>
      </Navbar>
    </div>
  );
}

export default NavBar;