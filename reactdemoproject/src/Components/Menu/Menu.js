import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { MenuHeading,MenuContainer, MenuButton } from './MenuElements';

const Menu = ({ head}) => {
  return (
    <MenuContainer id='menulist'>
        <MenuHeading>{head}</MenuHeading>
            <MenuButton><Link smooth to="#indian">Indian</Link></MenuButton>
            <MenuButton>South Indian</MenuButton>
            <MenuButton>North Indian</MenuButton>
            <MenuButton>Dinner Special</MenuButton>
            <MenuButton>Lunch Special</MenuButton>
            <MenuButton>Desert</MenuButton>
            <MenuButton>Starter</MenuButton>
    </MenuContainer>
  );
};

export default Menu;
