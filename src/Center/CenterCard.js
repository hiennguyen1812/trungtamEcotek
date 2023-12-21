import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import AddCenter from './AddCenter/AddCenter';
import "./CenterCard.css"

const CenterCard = (props) => {
    return (
      <div className='card_center'>
        {/* <AddCenter /> */}
        <div className='card_body'>
            <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Tên trung tâm</Card.Title>
              <Card.Text>
                {props.user.nameTT}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Mã đơn vị: {props.user.maDV} </ListGroup.Item>
              <ListGroup.Item>Tên Thành Phố: {props.user.addressTT} </ListGroup.Item>
              <ListGroup.Item>Địa chỉ IP: {props.user.IP}</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
    )
}

export default CenterCard
