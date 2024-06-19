import CustomNavbar from "../components/Navbar"
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";
import api from "../api";
import Books from "../components/Books"
import Row from 'react-bootstrap/Row';
import { ACCESS_TOKEN } from "../constants";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/esm/Button";

function Home() {

    const [books, setBooks] = useState([])
    const [loggedin, setLoggedin] = useState(false);
    const [searchword,setSearchWord]=useState("");
    

    useEffect(
        () => {
            loadBooks();
            checkUser();

        }, []
    )

    const loadBooks = () => {
        api.get("api/books/").then((res) => res.data).then((data) => { setBooks(data);}).catch((error) => alert(error.type));
    }

    const checkUser = () => {
        console.log(localStorage.getItem(ACCESS_TOKEN))
        if (localStorage.getItem(ACCESS_TOKEN) !== null) {
            setLoggedin(true)
        
        }
    }

    const addtocart = (id) => {
        api.post("api/cart/", { 'bookid': id }).then(() => alert("Book Added to your cart!"))
        console.log(id)
    }

    const searchBook=()=>{
        console.log(searchword)
        api.get(`api/books/?search=${searchword}`).then((res) => res.data).then((data) => { setBooks(data);}).catch((error) => alert(error.type));
       
    }
 

    return (
        <div>
            <CustomNavbar></CustomNavbar>


            <Container>

                <Row>
                    <h1 className="pt-3 py-3 px-3 text-center">BookStore </h1>
                    <InputGroup className="mb-3">
                        <Button onClick={searchBook} variant=" btn btn-primary outline-secondary" id="button-addon1">
                            Search
                        </Button>
                        <Form.Control type="text" value={searchword} onChange={(e)=>setSearchWord(e.target.value)}
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    {books.map((book) => <Books addtocart={addtocart} loggedin={loggedin} book={book} key={book.id} />)}
                </Row>
            </Container>
        </div>
    )
}

export default Home