import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';



function CartBook({ book, removeFromCart }) {
  if (book.stock > 0) {
    var status = "InStock"
  }
  else {
    status = "Out of Stock"
  }
  return (

    <Card className='mx-3 my-3 px-3' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='font-weight-dark'>{book.title}</Card.Title>
        <Card.Text>
          {book.author}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>&#x20b9; {book.price}</ListGroup.Item>
        <ListGroup.Item>{book.description}</ListGroup.Item>
        <ListGroup.Item>{status}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button onClick={() => removeFromCart(book)} variant="outline-primary">Remove from Cart</Button>
      </Card.Body>
    </Card>

  );
}

export default CartBook;