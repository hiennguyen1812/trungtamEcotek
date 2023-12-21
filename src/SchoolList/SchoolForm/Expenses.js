import Card from "../Card"
import SchoolForm from "./SchoolForm"

const Expenses = (props) => {
    const SchoolForm = props.data
    return (
        <Card className="expenses">
            <SchoolForm 
            maDV={SchoolForm[0].maDV}
            nameTT={SchoolForm[0].nameTT}
            addressTT={SchoolForm[0].addressTT}
            ipAddressTT={SchoolForm[0].ipAddressTT}
            />
            <SchoolForm 
            maDV={SchoolForm[1].maDV}
            nameTT={SchoolForm[1].nameTT}
            addressTT={SchoolForm[1].addressTT}
            ipAddressTT={SchoolForm[1].ipAddressTT}
            />
            <SchoolForm 
            maDV={SchoolForm[2].maDV}
            nameTT={SchoolForm[2].nameTT}
            addressTT={SchoolForm[2].addressTT}
            ipAddressTT={SchoolForm[2].ipAddressTT}
            />
        </Card>
    )
}

export  default Expenses