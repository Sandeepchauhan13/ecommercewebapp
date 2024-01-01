import React, {useState} from 'react'
import styled from 'styled-components';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Signup() {
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  // handlesubmit to submit name,email password axios is used and prevent default submisn  
  const handleSubmit = (e)=>{
      e.preventDefault()
      axios.post('http://localhost:3004/register',{fullName, email, password})
      .then(result => {console.log(result)
      //  props.showAlert("Successfully SignUp","Success") 
      navigate('/login')
      })
      .catch(err => console.log(err))
      // mongodb://localhost:27017
  }
  
  return (
    <>
      <Navbar/>
    <Container>
    <Logo>
        <img src="./amazon_logo.png" alt="" />
    </Logo>
    <FormContainer onSubmit={handleSubmit}>
        <h3>Sign-Up</h3>
        <InputContainer>
        <p>FullName</p>
        <input type="text" placeholder='John Shore' onChange={(e)=> setFullName(e.target.value)}/>
        </InputContainer>
         <InputContainer>
        <p>Email</p>
        <input type="email" placeholder='example@example.com' onChange={(e)=> setEmail(e.target.value)} />
        </InputContainer>
        <InputContainer>
        <p>Password</p>
        <input type="password" placeholder='********' onChange={(e)=> setPassword(e.target.value)} />
        </InputContainer>
        <SignUpButton>Create Account in Amazon</SignUpButton>
        </FormContainer>
        {/* <Link to="/login" onClick={()=> navigate('/login')} >  Login</Link> */}
        <LoginButton onClick={()=> navigate('/login')}>Login</LoginButton>
        {/* <p>Already have an account? <Link to="/login">Log in</Link>.</p> */}
    </Container>
    </>
  )
}

const Container = styled.div`
width: 40%;
min-width: 450px;
height:  fit-content;
padding: 15px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid red;
`;

const Logo = styled.div `
width: 120px;
img{
    width: 100%;
}
`;
const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;

    margin-bottom: 10px;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;
const SignUpButton = styled.button`
  width: 100%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;

  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;
const LoginButton = styled.button`

  width: 55%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;


export default Signup
