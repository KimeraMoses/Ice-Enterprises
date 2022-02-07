import React from 'react';
import styled from 'styled-components';
import image from './dashboardIcons/BlueLogo.png'
import {Wrapper, Left, Center, Right, DashIconContainer,Link, LeftCaption, DashLogo, CenterCaption  } from './dashboardStyle'
import Wallet from './dashboardIcons/wallet';
import User from './dashboardIcons/User';
import Rentals from './dashboardIcons/Rentals';
import Message from './dashboardIcons/Message';
import Notifications from './dashboardIcons/Notifications';

const Dash = styled.div`
  display: flex;
  background-color: black;

  
`

const Dashboard = () => {
  return (
    <Dash>
      <Wrapper>
        <Left>
            <DashLogo src={image} />
            <LeftCaption><Link>Player Dashboard</Link></LeftCaption>
        </Left>
        <Center>
            <CenterCaption><Link>Available Rentals</Link></CenterCaption>
            <CenterCaption><Link>FAQS</Link></CenterCaption>
          </Center>
        <Right>
            <DashIconContainer>
                
                  <Wallet />
            </DashIconContainer>
            <DashIconContainer>
                  <User />
            </DashIconContainer>
            <DashIconContainer>
                <Rentals />
            </DashIconContainer>
            <DashIconContainer>
                <Message />
            </DashIconContainer>
            <DashIconContainer>
                <Notifications />
            </DashIconContainer>
        </Right>
      </Wrapper>
    </Dash>

  );
};

export default Dashboard;
