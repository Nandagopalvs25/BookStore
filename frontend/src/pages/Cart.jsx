import CustomNavbar from "./Navbar"
import Container from "react-bootstrap/esm/Container"

function Cart() {
    return(

        <div>
            <CustomNavbar></CustomNavbar>

            <Container><h1 className="pt-3 text-center">Welcome to Your Cart</h1></Container>
        </div>
    )
}

export default Cart