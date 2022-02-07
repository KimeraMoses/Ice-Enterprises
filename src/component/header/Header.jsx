import React from 'react';
import styled from 'styled-components';
import { mdiReorderHorizontal } from '@mdi/js';
import { Wrapper, Left, Right, Info, DropDownLinks, Bars, BarIcon, Logo, IconWrap} from './headerStyle'
import Twitter from '../footer/footerIcons/Twitter';
import Discord from '../footer/footerIcons/Discord';

const Head = styled.header`
    position: fixed;
    /* top: 0;
    right: 0; */
    width: 100%;
    z-index: 1;



`


const Header = () => {
  return (
      <>
        <Head>
            <Wrapper>
            <Left><Logo /></Left>
            <Right>
            <Bars>
                <BarIcon path={mdiReorderHorizontal}
                        title=""
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                />
                <DropDownLinks>
                    <Info href="#">How it Work</Info>
                    <Info href="#">Benefits</Info>
                    <Info href="#">FAQs</Info>
                    <Info href="#">Our Team</Info>
                    <Info href="#">Our Story</Info>
                </DropDownLinks>
            </Bars>
            <IconWrap>
                    <Twitter />
                </IconWrap>
                <IconWrap>
                    <Discord />
                </IconWrap>
            </Right>
            </Wrapper>
        </Head>  

      
      </>
  );
};

export default Header;
