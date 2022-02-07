import React from 'react';
import styled from 'styled-components';

const ConnectDiv = styled.div`
  background-color: green;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20px;
  position: static;
  padding: 10px 10px;
`
const ConnectCaption= styled.h3`
  text-align: center;
  color: white;
  font-size: 12px;

`
const WalletConnect = () => {
  return(
    <ConnectDiv>
      <ConnectCaption>Wallet Connected</ConnectCaption>
    </ConnectDiv>
  );
};

export default WalletConnect;
