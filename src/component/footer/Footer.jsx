import React from 'react';
import styled from 'styled-components'
import { FootContent ,Left, Center, Right, CenterText, Link, LeftCaption, FootIcon, InfoCaption, Info, RightContent, FootCenter } from './footerStyle';
import Discord from './footerIcons/Discord';
import Twitter from './footerIcons/Twitter';
import Diamond from './footerIcons/Diamond';

const FooterContainer = styled.footer`
   position: static;
   background-color: black;

`


const Footer = () => {
  return (
    <FooterContainer>
        <FootContent>
            <Left> 
                <LeftCaption>&#169; 2022 Ice Entreprises,LLC,All rights reserved</LeftCaption></Left>
            <Center>  
                <FootCenter>        
                <FootIcon>
                    <Diamond />
                </FootIcon>
                <InfoCaption> Powered by<CenterText> NFT Consulting</CenterText></InfoCaption>
                </FootCenter>
            </Center>
            <Right>
            <RightContent>
                <Info><InfoCaption><Link> Privacy Policy</Link></InfoCaption></Info>
                    <Info><InfoCaption><Link>Terms of Service</Link></InfoCaption></Info>
                    <FootIcon>
                        <Twitter />
                    </FootIcon>
                    <FootIcon>
                        <Discord />
                    </FootIcon> 
                    </RightContent>
            </Right>
        </FootContent>
    </FooterContainer>
  );
};

export default Footer;
