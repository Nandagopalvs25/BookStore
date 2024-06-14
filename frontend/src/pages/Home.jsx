import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import CustomNavbar from "./Navbar"
import Container from 'react-bootstrap/Container';



function Home(){
    return(

        <div>
            <CustomNavbar></CustomNavbar>

            <Container><h1 className="pt-3 text-center">BookStore </h1></Container>
        </div>
    )
}

export default Home