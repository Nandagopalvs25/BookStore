import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




function Books({book}){
    if(book.stock>0){
       var status="InStock"
    }
    else{
        status="Out of Stock"
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
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      
      );


}
export default Books