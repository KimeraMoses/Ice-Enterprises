import React from 'react';
import styled from "styled-components"
import { mdiViewDashboardOutline } from '@mdi/js';
import { mdiCubeOutline } from '@mdi/js';
import { mdiCreditCardOutline } from '@mdi/js';
import { mdiShieldAccountOutline } from '@mdi/js';
import { mdiCogOutline } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import { mdiSafetyGoggles } from '@mdi/js';
import image from './navIcons/WhiteLogo.png'
import { Wrapper, Section, NavLinks, BarIcon, LogoContainer,Logo, Top, } from './navStyle'; 


const Nav = styled.nav`
    display: flex;
    max-width: 260px;
    height: 100vh;
    background-color: #262626;

`


const Navbar = () => {


  return (
    <Nav>
        <Wrapper>
        <Section>
            <Top>
                <LogoContainer>
                    <Logo src={image} />
                </LogoContainer>
            </Top>
            <NavLinks>
            <BarIcon path={mdiViewDashboardOutline}
                        title=""
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                />
                Dashboard</NavLinks>
            <NavLinks>
            <BarIcon path={mdiSafetyGoggles}
                        title=""
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                />
                Active Rentals</NavLinks>
            <NavLinks>
            <BarIcon path={mdiCubeOutline}
                        title=""
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                />
                Available Rentals</NavLinks>
            <NavLinks>
            <BarIcon path={mdiCreditCardOutline}
                        title=""
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                />
                Transaction</NavLinks>
            <NavLinks>
            <BarIcon path={mdiShieldAccountOutline}
                        title=""
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                />
                Users</NavLinks>
            <NavLinks>
            <BarIcon path={mdiCogOutline}
                        title=""
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                />
                Settings</NavLinks>
            <NavLinks>
            <BarIcon path={mdiLogout}
                        title=""
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                />
                Logout</NavLinks>
        </Section>
        </Wrapper>
    </Nav>
  );
};

export default Navbar;
