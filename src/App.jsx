import React from "react";
import {BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import  styled from "styled-components";
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Address from "./components/Address";
import Payment from "./components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AddProduct from "./components/AddProduct";


const promise = loadStripe(
  "pk_test_51OTOGgSDOOjyIbIaav9VaqnWUzWvvzLU1dN30HANGtVdc8WK7y1K6kIWBG01sZtf0O1kKNVSxMvkPOxIKn0ulO0M00rDz2EKpG"
);

function App() {
  // const [basket, setBasket] = useState([])
  // console.log('basket >>>', basket);
  return (
    <Router>
 
    <Container>
      <Routes>
        {/* <Route path="/" element = {<Home  />} /> */}
        <Route path="/home" element = {<Home  />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/" element = {<Signup />} />
        <Route path="/checkout" element = {<Checkout />} />
        <Route path="/address" element = {<Address />} />
        <Route path="/payment" element = {<Elements stripe={promise}><Payment /></Elements>} />
        <Route path="/addproduct" element = {<AddProduct />} />

       
      </Routes>
    </Container>
         
    </Router>
  );
}

const Container = styled.div `
width: 100vw
`;
export default App;
