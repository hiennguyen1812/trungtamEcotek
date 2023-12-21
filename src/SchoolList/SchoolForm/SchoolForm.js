import Card from "../Card";


const SchoolForm = (props) => {
    <Card>
        <div name={props.nameTT}>
            <h2>{props.maDV}</h2>
            <h2>{props.addressTT}</h2>
            <h2>{props.ipAddressTT}</h2>
        </div>
    </Card>
}

export default SchoolForm