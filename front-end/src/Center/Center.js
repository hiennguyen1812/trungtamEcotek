import Edit from "./CenterList/Edit";
import NavBar from "../UI/Navbar/Navbar";
import { useParams,useNavigate } from "react-router-dom";
import dataCenter from "./CenterList/data";

const Center = () => {
  const paramsCenter = useParams();

  const selectedCenter = dataCenter.find(
    (center) => center.MaCSDT === paramsCenter.MaCSDT
  );


  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <h2 className="edit_container container">Update thông tin trung tâm {paramsCenter.MaCSDT}</h2>
      {selectedCenter ? (
        <Edit key={paramsCenter.MaCSDT} user={selectedCenter} />
      ) : (
        <p>Center not found</p>
      )}
    </div>
  );
};

export default Center;
