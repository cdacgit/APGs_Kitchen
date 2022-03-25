import styled from "styled-components";

export const RegisterContainer = styled.div`
    background: #fff;
    border: 1px solid #dddfe2;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    border-radius: 8px;
    align-items: center;
    text-align: center; 
    margin: auto;
    width: 70%;
    padding: 10px;
    margin-top: 40px;
    margin-bottom: 40px;

`;

export const RegisterInput = styled.input`
    border-radius: 8px;
    border: 2px solid #dddfe2;
    outline: none;
    color: #1d2129;
    margin: 0.8rem 0;
    padding: 0.5rem 0.75rem;
    width: 30%;
    font-size: 1rem;
    margin: 5px 15px 10px 0;
  }
`;

export const RegisterButton = styled.button`
    font-weight: 600;
    font-size: 15px;
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
    margin-top: 1rem;
    }
    &:hover {
    background: #ffb03b;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    }
`;

export const RegisterHeading = styled.h1`
    font-weight: 900;
    font-size: 45px;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-family: 'Dancing Script', sans-serif;
`;