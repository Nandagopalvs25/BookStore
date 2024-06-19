import CustomNavbar from "../components/Navbar"
import { useState, useEffect } from "react"
import api from "../api"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function ProfilePage() {

    const [profile, setProfile] = useState("")
    const navigate=useNavigate()
    useEffect(
        () => {
            loadProfile()
        }, []
    )

    const loadProfile = () => {
        api.get("api/profile").then((res) => res.data).then((data) => {
            setProfile(data); console.log(data)

        }).catch((error) => alert(error.type));
    }

    if(profile['is_admin']===true){
        return (
            <Container>
                <CustomNavbar></CustomNavbar>
                <div className="px-3 py-3">
                <h1 className="text-center">Profile page</h1>
                </div>
                <Card className="  mx-3 my-3" style={{ width: '75%' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Username: {profile["username"]}</ListGroup.Item>
                        <ListGroup.Item>Address: {profile["address"]}</ListGroup.Item>
                        <ListGroup.Item>Phone number: {profile["phone_number"]}</ListGroup.Item>
                        
                    </ListGroup>
                </Card>
            </Container>
        )
    }
    else{
        return (
            <div>
                <CustomNavbar></CustomNavbar>
                <div className="px-3 py-3">
                <h1 >Profile page</h1>
                </div>
                <Card className="  mx-3 my-3" style={{ width: '75%' }}>
                    <ListGroup variant="flush">
                       <ListGroup.Item>Username: {profile["username"]}</ListGroup.Item>
                        <ListGroup.Item>Address:  {profile["address"]}</ListGroup.Item>
                        <ListGroup.Item>Phone number: {profile["phone_number"]}</ListGroup.Item>
                       
                    </ListGroup>
                   
                </Card>
                <Button onClick={()=>{navigate("/admin")}} className="mx-3">Admin Panel</Button>
                
            </div>
        )
    }

   


}

export default ProfilePage