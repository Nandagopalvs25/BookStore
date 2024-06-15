import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import CustomNavbar from "./Navbar"
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";
import api from "../api";
import Books from "../pages/Books"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    const [books, setBooks] = useState([])

    useEffect(
        ()=>{
            loadBooks();
        },[]
    )

    const loadBooks = () => {
        api.get("api/books/").then((res) => res.data).then((data) => {setBooks(data);console.log(data)}).catch((error)=>alert(error.type));
    }

    return (

        <div>
            <CustomNavbar></CustomNavbar>

            <Container>
                <Row>
                <h1 className="pt-3 text-center">BookStore </h1>
                 {books.map((book)=>  <Books book={book} key={book.id}/>)}
                 </Row>
                </Container>
        </div>
    )
}

export default Home