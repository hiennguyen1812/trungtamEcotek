import React, { useState, useEffect } from "react";
import AddCenter from "../CRUD/AddCenter";
import axios from "axios";
import CenterCard from "../CenterCard";
import NavBar from "../../UI/Navbar/Navbar";
import "./CenterList.css";
import SideBar from "../../UI/Sidebar/Sidebar";
import dataCenter from "./data";
import toastr from "toastr";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Edit from "./Edit";


const CenterList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios
      .get(dataCenter)
      .then((response) => {
        setUsers(response.dataCenter);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleAddUser = (value) => {
    setUsers((prev) => [
      ...prev,
      {
        MaCSDT: value.MaCSDT,
        MaSoGTVT: value.MaSoGTVT,
        LoaiDV: value.LoaiDV,
        TenCSDT: value.TenCSDT,
        CoQuanQuanLy: value.CoQuanQuanLy,
        DienThoai: value.DienThoai,
        DiaChi: value.DiaChi,
        LanhDao: value.LanhDao,
      },
    ]);
  };

  const filteredUsers = dataCenter.filter((user) => {
    return (
      user.MaCSDT.indexOf(searchValue) > -1 ||
      user.TenCSDT.indexOf(searchValue) > -1
    )
  })

  const onSearchChange = (event) => {
    setSearchValue(event.target.value)
  }


  return (
    <div>
      <NavBar />
      <SideBar />
      <div className="search_bar_center">
          <Col className="container col_label_center" md>
            <FloatingLabel controlId="floatingInputGrid" 
              label="Search...">
              <Form.Control value={searchValue}
              onChange={onSearchChange} type="text" 
              placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
        </div>
      {/* <div className="center"> */}
        {/* <SideBar /> */}
        <div className="container mt-5">
          <AddCenter
            onSubmit={handleAddUser}
            //  onClick={handleDeleteTask}
          />

          <div className="center_list_card">
            {loading ? (
              <p>Loading...</p>
            ) : (
              [...filteredUsers,...users].map((user) => (
                <CenterCard key={user.MaCSDT} user={user} />
              ))
            )}
          </div>
        </div>
        
      {/* </div> */}
    </div>
  );
};

export default CenterList;
