import Container from "react-bootstrap/esm/Container"
import CustomNavbar from "../components/Navbar"
import Form from "react-bootstrap/esm/Form"
import { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import api from "../api"


function CreateBook() {

    const [book, setBook] = useState({ title: "", price: "", description: "", stock: "", author: "" })

    const addBook = () => {
        api.post(`api/createbook/`, { 'author': book.author, 'price': book.price, 'title': book.title, 'description': book.description, 'stock': book.stock }).then(() => alert("Created Successfully!"))
        console.log(book)
    }


    return (
        <div>
            <CustomNavbar></CustomNavbar>
            <Container>
                <h1>Add Book</h1>
                <Form className="my-4">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder={book.title} onChange={(e) => { book.title = e.target.value }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder={book.author} onChange={(e) => { book.author = e.target.value }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder={book.price} onChange={(e) => { book.price = e.target.value }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder={book.description} rows={3} onChange={(e) => { book.description = e.target.value }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="text" placeholder={book.stock} onChange={(e) => { book.stock = e.target.value }} />
                    </Form.Group>
                    <Button onClick={addBook}>Submit</Button>

                </Form>
            </Container>
        </div>
    )
}

export default CreateBook