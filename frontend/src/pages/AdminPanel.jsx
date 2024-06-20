import CustomNavbar from "../components/Navbar"
import InputGroup from "react-bootstrap/esm/InputGroup";
import api from "../api";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Books from "../components/Books";
import BookAdmin from "../components/BookAdmin";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
function AdminPanel() {

    const [books, setBooks] = useState([])
    const [searchword, setSearchWord] = useState("");
    const navigate = useNavigate();
    
    useEffect(
        () => {
            loadBooks();
        }, []
    )

    const loadBooks = () => {
        api.get("api/books/").then((res) => res.data).then((data) => { setBooks(data); }).catch((error) => alert(error.type));
    }


    const searchBook = () => {
        console.log(searchword)
        api.get(`api/books/?search=${searchword}`).then((res) => res.data).then((data) => { setBooks(data); }).catch((error) => alert(error.type));

    }

    const routeTo = (route, book) => {
        navigate(route, { state: { id: book.id } })
    }

    const createroute = () => {
        navigate("/createbook")
    }

    const delBook = (id) => {
        api.delete(`api/editbook/${id}`).then(() => alert("Book deleted Sucessfully")).then(() => loadBooks())
        console.log(id)
    }

    return (
        <div>
            <CustomNavbar></CustomNavbar>
            <Container>

                <h1 className="pt-3 py-3 px-3 text-center">Admin Panel </h1>
                <Button className="btn btn-success my-4" style={{ width: '9rem' }} onClick={() => { createroute() }} > + Add Book</Button>
                <InputGroup className="mb-3">
                    <Button onClick={searchBook} variant=" btn btn-primary outline-secondary" id="button-addon1">
                        Search
                    </Button>
                    <Form.Control type="text" value={searchword} onChange={(e) => setSearchWord(e.target.value)}
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>


                <Row>
                    {books.map((book) => <BookAdmin route={routeTo} delbook={delBook} book={book} key={book.id} />)}
                </Row>

            </Container>

        </div>
    )
}

export default AdminPanel