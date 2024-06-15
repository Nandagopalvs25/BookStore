import CustomNavbar from "../components/Navbar"
import { useState,useEffect } from "react"
import api from "../api"
import OrderComponent from "../components/OrderComponent"
import Row from "react-bootstrap/esm/Row"


function OrderPage(){

    const [orders,setOrder]=useState([])

    useEffect(
        () => {
            loadOrders()     
        }, []
    )

    const loadOrders = () => {
        api.get("api/getorders/").then((res) => res.data).then((data) => { setOrder(data)
           
          
            
           
        }).catch((error) => alert(error.type)); 
    }



    return(
        <div>
        <CustomNavbar></CustomNavbar>
        <Row>
        {orders.map((order) => <OrderComponent order={order} key={order.id} />)}
        </Row>
        </div>
    )
}

export default  OrderPage