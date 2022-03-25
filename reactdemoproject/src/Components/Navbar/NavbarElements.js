import styled from 'styled-components';

export const NavbarContainer = styled.div`
    background: rgba(0, 0, 0, 0.4); 
    height: 65px;
    width: 1900px;
    display: flex;
    justify-items: center;
    align-items: center;
    font-size: 1.6rem;
    position: fixed;
`;

export const NavbarHead = styled.nav`
    color: #fff;
    justify-self: start;
    margin-left: 100px;
    cursor: pointer;
    width: 70vw;;
`;

export const NavItem = styled.div`
    display: grid;
    grid-template-columns: repeat(10,auto);
    grid-gap:10px;
    list-style: none;
    text-align: center;
    width: 86vw;
    justify-content: end;
    margin-right: 15rem;
    color: #fff;
    margin-right: 200px;
    margin-left: 100px;
    position: fixed;

`;

export const NavList = styled.li`
    margin-top: -48px;
    a{
        color: #fff;
        text-decoration: none;
        padding: 0.5rem 1rem;

     }
     
    &:hover {
        background-color: #ffc500;
        border-radius: 4px;
        transition: all 0.2s ease-out;
        text-decoration: none;
        width: auto;
		height: 37px;
    }
`;

export const NavbarTitle = styled.h1`
    a{
        color: #fff;
        text-decoration: none;
        padding: 0.5rem 1rem;
    }
    a:link {
        text-decoration: none;
    }
`;
