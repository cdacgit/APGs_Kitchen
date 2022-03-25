import styled from "styled-components";

export const MenuContainer = styled.div`
  background-color:#fffaf3;
  background-size: 100% 100%;
  min-height: 40vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #000;
  font-family: 'Poppins', sans-serif;
`;
export const MenuHeading = styled.h1`
  font-weight: 900;
  font-size: 42px;
  text-align: center;
  margin-bottom: 5rem;
  margin-top: 0rem;
  font-family: 'Dancing Script', sans-serif;
`;

export const MenuButton = styled.button`
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
    margin-top: -5rem;
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
        text-decoration: none;
    }
`;