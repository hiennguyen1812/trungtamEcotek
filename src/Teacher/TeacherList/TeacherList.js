import NavBar from "../../UI/Navbar/Navbar";
import SideBar from "../../UI/Sidebar/Sidebar";
import dataTeacher from "./data";
import "./TeacherList.css";
import Teacher from "./Teacher";
import { useState, useEffect } from "react";
import AddTeacher from "../CRUD/AddTeacher";
import axios from "axios";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const TeacherList = () => {
  // const [formVisible, setFormVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValueTeacher, setSearchTeacherAcc] = useState("");
  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios
      .get(dataTeacher)
      .then((response) => {
        setTeachers(response.dataTeacher);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleAddTeacher = (value) => {
    setTeachers((prev) => [
      ...prev,
      {
        teacherName:value.teacherName,
        teacherBirth: value.teacherBirth,
        CCCD: value.CCCD,
        maGV: value.maGV,
      },
    ]);
  };

  const filteredTeacher = dataTeacher.filter((teacher) => {
    return (
      teacher.maGV.indexOf(searchValueTeacher) > -1 ||
      teacher.teacherName.indexOf(searchValueTeacher) > -1 
    )
  })

  const onSearchTeacherChange = (event) => {
    setSearchTeacherAcc(event.target.value)
  }



  return (
    <div>
      <NavBar />
      <SideBar />
      <section id="teacherList">
      <div className="search_bar_teacher">
          <Col className="container col_label_teacher" md>
            <FloatingLabel controlId="floatingInputGrid" 
              label="Search...">
              <Form.Control value={searchValueTeacher}
              onChange={onSearchTeacherChange} type="text" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
        </div>
        <h2>Danh sách giáo viên</h2>
        <br />

        <AddTeacher onSubmit={handleAddTeacher} />
        <br />
        <div className="container tc_list_container">
          { loading ? (
            <p>Loading...</p>
          ) : (
          [...filteredTeacher,...teachers].map((teacher) => (
              <Teacher key={teacher.maGV} teacher={teacher} />
              
              )
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeacherList;
