import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
// import Expenses from './SchoolList/SchoolForm/Expenses';
// import SchoolForm from './SchoolList/SchoolForm/SchoolForm';
import { Route, Routes} from "react-router-dom";
import Login from './Login/Login';
import Register from './Login/Register';
import CenterCard from './Center/CenterCard';
import CenterList from './Center/CenterList/CenterList';
import Edit from "./Center/CenterList/Edit"
import AccountList from './Account/AccountList';
import TeacherList from './Teacher/TeacherList/TeacherList';
import Payment from './Paynemt/Payment';
import NotFound from './UI/Sidebar/NotFound';
import Center from './Center/Center';



function App  () {
  return (
    <div className="App">
          <Routes> 
            <Route path="/" element={<CenterList/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<AccountList />} />
            <Route path="/teacher" element={<TeacherList />} />
            <Route path="payment/:maGV" element={<Payment />} />
            <Route path="/center/:MaCSDT" element={<Center />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
    </div>
  );
}

export default App;
