import styled from "styled-components";

export const LoginContainer = styled.div`
    background-color: #fff;
    border: 1px solid #dddfe2;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    border-radius: 8px;
    align-items: center;
    text-align: center; 
    margin: auto;
    width: 30%;
    padding: 10px;
    margin-top: 40px;
    margin-bottom: 40px;

`;

export const LoginInput = styled.input`
    border-radius: 8px;
    border: 2px solid #dddfe2;
    outline: none;
    color: #1d2129;
    margin: 0.5rem 0;
    padding: 0.5rem 0.75rem;
    width: 92%;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
  }
`;

export const LoginButton = styled.button`
    font-weight: 600;
    font-size: 20px;
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
    margin-top: 20px;
    }
    &:hover {
        background: #ffb03b;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;

export const SingupButton = styled.button`
    font-weight: 600;
    font-size: 20px;
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
    margin-top: 20px;
    }
    &:hover {
        background: #ffb03b;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
    a{
        color: #000;
      }
      a:link{
          color: #fff;
          text-decoration: none;
      }
`;

export const LoginHeading = styled.h1`
    font-weight: 900;
    font-size: 45px;
    text-align: center;
    margin-top: 0rem;
    font-family: 'Dancing Script', sans-serif;
    color: #000;
`;