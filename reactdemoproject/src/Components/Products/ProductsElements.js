import styled from 'styled-components';
// import ImgBg from '../../images/food-1.jpg'
// background-image: url(${ImgBg});

export const ProductsContainer = styled.div`
  background-color: #fff;
  background-size: 100% 100%;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #000;
  font-family: 'Poppins', sans-serif;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductHeading = styled.h1`
  font-weight: 900;
  font-size: 45px;
  text-align: center;
  margin-bottom: 5rem;
  margin-top: 0rem;
  font-family: 'Dancing Script', sans-serif;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: #000;
  text-transform: none;
`;

export const ProductDese = styled.p`
  margin-bottom: 1rem;
  
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: none;
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    transition: 0.5s;
    line-height: 1;
    margin: 0 10px;
    -webkit-animation-delay: 0.8s;
    animation-direction: alternate;
    animation-delay: 0.8s;
    border: 2px solid #ffb03b;
    background: transparent;
    color: #000;
    }
    &:hover {
    background: #ffb03b;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    }
`;