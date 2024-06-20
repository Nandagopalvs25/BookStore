
import Container from "react-bootstrap/esm/Container"
import CustomNavbar from "./Navbar"
import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';
import api from "../api";
import Form from "react-bootstrap/esm/Form"
import Button from  "react-bootstrap/esm/Button"

function BookForm() {
    const location = useLocation();
    const [book, setBook] = useState({title:"",price:"",description:"",stock:"",author:""})
    


    useEffect(
        () => {
            getbook();

        }, []
    )

    const getbook = () => {
        var id = location.state.id
       

        api.get(`api/editbook/${id}`).then((res) => res.data).then((data) => {
            setBook({title:data['title'],price:data['price'],description:data["description"],stock:data['stock'],author:data['author']});
             
        }).catch((error) => alert(error.type));
    }

    const updateBook=()=>{
        var id = location.state.id
        api.patch(`api/editbook/${id}`, {'price':book.price,'title':book.title,'description':book.description,'stock':book.stock,'author':book.author}).then(() => alert("Updated Succesfully!")).then(()=>{getbook()})
        console.log(book)
    }


    return (
        <div>
            <CustomNavbar></CustomNavbar>

            <Container>
                <h1> Book Edit Page</h1>

                <Form className="my-4">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder={book.title} onChange={(e)=>{book.title=e.target.value}}/>
                    </Form.Group>
                 
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder={book.author} onChange={(e)=>{book.author=e.target.value}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder={book.price} onChange={(e)=>{book.price=e.target.value}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder={book.description} rows={3} onChange={(e)=>{book.description=e.target.value}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="text" placeholder={book.stock} onChange={(e)=>{book.stock=e.target.value}} />
                    </Form.Group>
                     <Button onClick={updateBook}>Submit</Button>

                </Form>
            </Container>
        </div>
    )
}

export default BookForm