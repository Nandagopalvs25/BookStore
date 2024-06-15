import Row from "react-bootstrap/esm/Row"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




function OrderComponent(order) {
    console.log(order.order)

    return (

        <Card className="mx-4 my-5" style={{ width: '15rem' }}>
            <Card.Header>Order id:{order.order.id}</Card.Header>
            <Card.Body>
                {order.order.books.map(book => (
                    <Card.Text>{book.title} </Card.Text>
                ))}
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Total: &#x20b9;{order.order.price}</ListGroup.Item>
                <ListGroup.Item>Placed on: {order.order.date}</ListGroup.Item>
            </ListGroup>

        </Card>

    )
}


export default OrderComponent