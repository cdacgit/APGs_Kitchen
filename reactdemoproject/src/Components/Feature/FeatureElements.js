import styled from "styled-components";
import FeaturePic from '../../images/featured-3.jpg'

export const FeatureContainer = styled.div`
    background-image: url(${FeaturePic});
    backgroung: linear-gradient(to right,rgba(0,0,0,0,7),rgba(0,0,0,0,1));
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1 {
        font-size: clamp(3rem, 5vw, 5rem);
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
`;

export const FeatureButton = styled.button`
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
    color: #fff;
    }
    &:hover {
    background: #ffb03b;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    }
`;