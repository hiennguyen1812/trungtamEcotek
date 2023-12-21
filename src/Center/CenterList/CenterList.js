import AddCenter from "../AddCenter/AddCenter"
import CenterCard from "../CenterCard"
import NavBar from "../../UI/Navbar"
import "./CenterList.css"

const CenterList = () => {
    const users = [
        {nameTT: "trung tam A", maDV: "1234", addressTT: "Ha Noi", IP: "103.1.210.21"},
        {nameTT: "trung tam B", maDV: "52445", addressTT: "Ha Noi", IP: "103.1.210.21"},
        {nameTT: "trung tam C", maDV: "453453", addressTT: "Ha Noi", IP: "103.1.210.21"},
        {nameTT: "trung tam D", maDV: "453543", addressTT: "Ha Noi", IP: "103.1.210.21"},
        {nameTT: "trung tam E", maDV: "453204", addressTT: "Ha Noi", IP: "103.1.210.21"},
    ]
    return (
        <div className="container mt-5">
            <AddCenter />
            <div className="center_list_card">
                    {users.map((user) => {
                        return <CenterCard key={user.maDV} user={user} />
                        
                    })}
            </div>
        </div>
    )
}

export default CenterList