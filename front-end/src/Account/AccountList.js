import NavBar from "../UI/Navbar/Navbar";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./AccountList.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import dataAccount from "./data";
import AddAccount from "./CRUD/AddAccount";
import Card from "../components/Card";
import { VscAccount } from "react-icons/vsc";
import SideBar from "../UI/Sidebar/Sidebar";
import { Link, useParams } from "react-router-dom";
import NotFound from "../UI/NotFound";

const AccountList = (props) => {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState([]);
  const [searchValueAcc, setSearchValueAcc] = useState("");
  const paramsAccount = useParams();

  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios
      .get(dataAccount)
      .then((response) => {
        setAccount(response.dataTeacher);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const selectedAccount = dataAccount.find(
    (account) => account.MaCSDT === paramsAccount.MaCSDT
  );

  const handleAddAccount = (v) => {
    setAccount((prev) => [
      ...prev,
      {
        AccountName: v.AccountName,
        MaDV: v.MaDV,
        Password: v.Password,
      },
    ]);
  };

  // const filteredAccount = dataAccount.filter((acc) => {
  //   return (
  //     acc.MaDV.indexOf(searchValueAcc) > -1 ||
  //     acc.AccountName.indexOf(searchValueAcc) > -1
  //   );
  // });

  const onSearchAccChange = (event) => {
    setSearchValueAcc(event.target.value);
  };

  return (
    <div>
      <NavBar />
      <SideBar />
      <section id="account">
        <div className="search_bar_account">
          <Col className="container col_label_acc" md>
            <FloatingLabel controlId="floatingInputGrid" label="Search...">
              <Form.Control
                value={searchValueAcc}
                onChange={onSearchAccChange}
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
          </Col>
        </div>
        <div className="container acc_container">
          <div className="account_head">
            <h2>Tài khoản của đơn vị {paramsAccount.MaCSDT} </h2>
            <br />
            <AddAccount onSubmit={handleAddAccount} />
            <div className="account_cards">
              {loading ? (
                <p>Loading....</p>
              ) : selectedAccount ? (
                [selectedAccount, ...account].map((acc) => (
                  <Card key={acc.MaCSDT} acc={acc} className="account_card">
                    <span className="account_card-icon">
                      <VscAccount />
                    </span>
                    <h5>Mã đơn vị: {acc.MaDV}</h5>
                    <h6>Tài khoản: {acc.AccountName}</h6>
                    <h6>Mật khẩu: {acc.Password}</h6>
                  </Card>
                ))
              ) : (
                <p>Account not found</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountList;
