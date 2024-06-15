import React from "react"
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Cart from "./pages/Cart"
import ProtectedRoute from "./components/ProtectedRoute"
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderPage from "./pages/OrderPage"

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"/>


function Logout(){
  localStorage.clear()
    return <Navigate to="/"/>
    
  }

function RegisterAndLogout(){
  localStorage.clear()
  return <Register />
}

function App() {

  
 
  return (
    
    
    
    
   <BrowserRouter>
    
    <Routes>

          <Route path="/"element={<Home/>} />
          <Route path="/cart"element={<ProtectedRoute> <Cart/></ProtectedRoute>} />
          <Route path="/orders"element={<ProtectedRoute> <OrderPage/></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterAndLogout/>} />
          <Route path="logout" element={<Logout/>} />
          <Route path="*" element={<NotFound/>}/>

    </Routes>
   </BrowserRouter>
  )
}

export default App
