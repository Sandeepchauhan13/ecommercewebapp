import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import Card from './Card';

function Home() {
  
  return (
    <>
     <Navbar/>
    <Container>
   <Banner>
 <img src="./banner.jpg" alt="imgloading"/>
<img src="./mobile_banner.jpg" alt="imgloading" />
   </Banner>
   <Main>
    <Card  id={1} image={"https://m.media-amazon.com/images/I/41zKmy7bFtL._AC_UF452,452_FMjpg_.jpg"} price={9000} rating={3} title={"Lenovo products"}/>

    <Card id={2} image={"https://m.media-amazon.com/images/I/41JJDX4WK3L._AC_UF452,452_FMjpg_.jpg"} price={7000} rating={3} title={"Vaccum Clear ILife"}/>

    <Card  id={3} image={"https://m.media-amazon.com/images/I/51M9T0C4ssL._AC_SR400,600_.jpg"} price={5000} rating={3} title={" Apollo tyres "}/>

    <Card id={4} image={"https://m.media-amazon.com/images/I/51VyJ5BXqRL._AC_SR400,600_.jpg"} price={93000} rating={4.5} title={"Google tv products"}/>

    <Card id={5} image={"https://m.media-amazon.com/images/I/41HydIQsl4L._AC_UF452,452_FMjpg_.jpg"} price={9800} rating={3} title={"Running Machine"}/>

    <Card id={6} image={"https://m.media-amazon.com/images/I/61gslUDRDOL._AC_UF452,452_FMjpg_.jpg"} price={4300} rating={3} title={"Apollo tyres"}/>
    <Card id={7} image={"https://m.media-amazon.com/images/I/41SLt3hRyML._AC_UF452,452_FMjpg_.jpg"} price={7800} rating={3} title={"Electronics Appliances"}/>
    <Card id={8} image={"https://m.media-amazon.com/images/I/61oxEQQKYGL._AC_UF452,452_FMjpg_.png"} price={3200} rating={3} title={"Garments"}/>
  
    
   {/* {products &&
          products?.data.map((product) => (
            <Card
              id={product._id}
              image={product.imageURL}
              price={product.price}
              rating={product.rating}
              title={product.title}
            />
          ))} */}

   </Main>
    </Container>
    </>
  )
}

const Container = styled.div`
width: 100%;
background-color: rgb(234, 237, 237);
// margin-top:240px;
`;

const Banner = styled.div`
width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  /* Tablets */

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;

export default Home
