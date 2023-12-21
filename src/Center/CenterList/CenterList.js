import AddCenter from "../AddCenter/AddCenter"
import CenterCard from "../CenterCard"
import NavBar from "../../UI/Navbar"
import "./CenterList.css"
import { useState } from "react"

const CenterList = () => {
    const [users, setUsers] = useState ([
        {nameTT: "trung tam A", maDV: "1234", addressTT: "Ha Noi", IP: "103.1.210.21"},
        {nameTT: "trung tam B", maDV: "52445", addressTT: "Ha Noi", IP: "103.1.210.21"},
        {nameTT: "trung tam C", maDV: "453453", addressTT: "Ha Noi", IP: "103.1.210.21"},
        {nameTT: "trung tam D", maDV: "453543", addressTT: "Ha Noi", IP: "103.1.210.21"},
        {nameTT: "trung tam E", maDV: "453204", addressTT: "Ha Noi", IP: "103.1.210.21"},
    ])

    // const onAddExpense = (value) => {
    //     users((prev) => {
    //       return [
    //         ...prev,
    //         {
    //           nameTT: value.date,
    //           maDV: value.maDV,
    //           addressTT: value.addressTT,
    //           IP: value.IP,
    //         },
    //       ];
    //     });
    //   };
    const handleAddUser = (value) => {
        setUsers((prev) => {
          return [
            ...prev,
            {
                nameTT: value.nameTT,
                maDV: value.maDV,
                addressTT: value.addressTT,
                IP: value.IP,
            },
          ];
        });
      };
    return (
        <div className="container mt-5">
            <NavBar />
            <AddCenter 
                onSubmit={handleAddUser}
            />

            <div className="center_list_card">
                    {users.map((user) => {
                        return <CenterCard key={user.maDV} user={user} />
                        
                    })}
            </div>
        </div>
    )
}

export default CenterList