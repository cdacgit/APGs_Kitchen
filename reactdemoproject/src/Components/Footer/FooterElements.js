import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background: #35322d;
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 30px 0;
    margin-top: 10rem;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.h1`
  color: #ffb03b;
  text-decoration: none;
  font-size: 30px;
  margin: 0px 60px 10px 20px;
  font-weight: 700;
  font-family: 'Dancing Script', sans-serif;
  margin-bottom: 150px;
  margin-left: 500px;

`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const SocialIconLink = styled(Link)`
  font-size: 24px;
  margin: 0 0 40px 0;
  display: inline-block;
  background: #46423b;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 20px;
  border-radius: 100%;
  text-align: center;
  width: 36px;
  height: 22px;
  transition: 0.3s;
  margin-top: 100px;

  &:hover{
    background: #ffb03b;
  }
  a:Link {
    margin-right: 50px;
  }
`;
