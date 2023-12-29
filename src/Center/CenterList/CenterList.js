import React, { useState, useEffect } from "react";
import AddCenter from "../CRUD/AddCenter";
import axios from "axios";
import CenterCard from "../CenterCard";
import NavBar from "../../UI/Navbar/Navbar";
import "./CenterList.css";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Search from "../../Search/Search";

const CenterList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios
      .get("http://localhost:3000/data")
      .then((response) => {
        setUsers(response.data);
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
  const handleSearch = async () => {
    const res = await fetch("http://localhost:3000/data")
    const resJson = await res.json();
    console.log(resJson);
  }

  return (
    <div>
      <NavBar />
      <div className="center">
        <Sidebar />
        <div className="container mt-5">
          <AddCenter onSubmit={handleAddUser} />

          <div className="center_list_card">
            {loading ? (
              <p>Loading...</p>
              ) : (
                users.map((user) => <CenterCard key={user.MaCSDT} user={user} />)
                )}
          </div>
        </div>
        <div className="search_footer">
                <Search onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default CenterList;
