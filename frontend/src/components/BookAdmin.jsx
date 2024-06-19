import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';



function BookAdmin({ book,  addtocart }) {
 
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
          <Button onClick={() => addtocart(book.id)} variant="outline-primary">Edit</Button>
        </Card.Body>
      </Card>

    );
 


  
}
export default BookAdmin