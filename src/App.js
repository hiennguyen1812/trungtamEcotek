import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
// import Expenses from './SchoolList/SchoolForm/Expenses';
// import SchoolForm from './SchoolList/SchoolForm/SchoolForm';
import { Route, Routes} from "react-router-dom";
import Login from './Login/Login';
import Register from './Login/Register';
import CenterCard from './Center/CenterCard';
import CenterList from './Center/CenterList/CenterList';
import Edit from './Center/CRUD/Edit';
import AccountList from './Account/AccountList';



function App  () {
  return (
    <div className="App">
          <Routes> 
            <Route path="/" element={<CenterList/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="update/:maDV" element={<Edit />} /> */}
            <Route path="/account" element={<AccountList />} />
          </Routes>
    </div>
  );
}

export default App;
