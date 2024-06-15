import CustomNavbar from "../components/Navbar"
import Container from "react-bootstrap/esm/Container"
import { useEffect, useState } from "react";
import api from "../api";
import Row from "react-bootstrap/esm/Row";
import CartBook from "../components/CartBook";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";


function Cart() {
    const [books, setBooks] = useState([]);
    const [price,setPrice]=useState(0)
    const [checkoutEligible,setCheckouteligible]=useState(true)
    const navigate=useNavigate()
   


    useEffect(
        () => {
            loadBooks()     
        }, []
    )
  
    useEffect(()=>{
        if(books!=[]){
            findPrice()
        }
    })

    useEffect(()=>{
        if(books!=[]){
            checkEligible()
        }
    })

    const loadBooks = () => {

        api.get("api/cart/").then((res) => res.data).then((data) => { 
           
            setBooks(data.books); 
           
        }).catch((error) => alert(error.type));
       
    }

    const checkEligible=(()=>{
        books.map((book)=>{
            if(Number(book.stock)===0){
                setCheckouteligible(false)
            }
        })

    })



    const removeFromCart = (book) => {
        api.delete(`api/cart/${book.id}`).then(() => { loadBooks(); }).then(() => alert("Book Removed from your cart!"));

    }

    const findPrice=(()=>{
        let sum=0
            books.map((book)=>{
                sum=sum+Number(book.price)
            })
          setPrice(sum)
       
    })

    const placeOrder=(()=>{
        const book_ids=[]
        books.map((book)=>{
            book_ids.push(book.id)
        })
        console.log(book_ids)
        api.post("api/order/",{"book_ids":book_ids}).then(()=>alert("Order places Successfully"))
        navigate("/")
            
    })

    if(checkoutEligible===true){

    return (

        <div>
            <CustomNavbar></CustomNavbar>

            <Container><h1 className="pt-3 text-center">Welcome to Your Cart</h1></Container>
            <Container>
                <Card style={{ width: '28rem' }} className="px-5 py-2 my-5">
                    <Card.Title>Cart Summary</Card.Title>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item>Quantity: {books.length}</ListGroup.Item>
                 <ListGroup.Item>Total Price: &#x20b9;{price}</ListGroup.Item>
                 <ListGroup.Item className="text-success">Status: In Stock</ListGroup.Item>
          </ListGroup>
          <Card.Body>
          <Button  onClick={placeOrder} variant="outline-warning">Checkout</Button>
          
          </Card.Body>
                </Card>
                <Row>
                    {books.map((book) => <CartBook removeFromCart={removeFromCart} book={book} key={book.id} />)}
                </Row>
            </Container>
        </div>
    )
}
else{
    return (

        <div>
            <CustomNavbar></CustomNavbar>

            <Container><h1 className="pt-3 text-center">Welcome to Your Cart</h1></Container>
            <Container>
                <Card style={{ width: '28rem' }} className="px-5 py-2 my-5">
                    <Card.Title>Cart Summary</Card.Title>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item>Quantity: {books.length}</ListGroup.Item>
                 <ListGroup.Item>Total Price: &#x20b9;{price}</ListGroup.Item>
                 <ListGroup.Item className="text-danger">Status: Item out of stock</ListGroup.Item>
          </ListGroup>
          <Card.Body>
          
          
          </Card.Body>
                </Card>
                <Row>
                    {books.map((book) => <CartBook removeFromCart={removeFromCart} book={book} key={book.id} />)}
                </Row>
            </Container>
        </div>
    )

}
}

export default Cart