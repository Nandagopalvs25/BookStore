import CustomNavbar from "../components/Navbar"
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";
import api from "../api";
import Books from "../components/Books"
import Row from 'react-bootstrap/Row';
import { ACCESS_TOKEN } from "../constants";

function Home() {

    const [books, setBooks] = useState([])
    const [loggedin, setLoggedin] = useState(false);

    useEffect(
        () => {
            loadBooks();
            checkUser();

        }, []
    )

    const loadBooks = () => {
        api.get("api/books/").then((res) => res.data).then((data) => { setBooks(data); console.log(data) }).catch((error) => alert(error.type));
    }

    const checkUser = () => {
        console.log(localStorage.getItem(ACCESS_TOKEN))
        if (localStorage.getItem(ACCESS_TOKEN) !== null) {
            setLoggedin(true)
            console.log("Executed")
        }
    }

    const addtocart = (id) => {
        api.post("api/cart/", { 'bookid': id }).then(() => alert("Book Added to your cart!"))
        console.log(id)
    }

    return (
        <div>
            <CustomNavbar></CustomNavbar>
            <Container>
                <Row>
                    <h1 className="pt-3 text-center">BookStore </h1>
                    {books.map((book) => <Books addtocart={addtocart} loggedin={loggedin} book={book} key={book.id} />)}
                </Row>
            </Container>
        </div>
    )
}

export default Home