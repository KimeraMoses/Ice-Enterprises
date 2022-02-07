import React from 'react';
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/nav/Navbar';
import './404.css'
import styled from 'styled-components';

const Return = styled.a`
  text-decoration: none;
  /* background-color: #f44336;  */
  border: none;
  color: #f44336;
  /* padding: 15px 32px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 2px;
`

const NotFound = () => {
  return (
      <>
        <Navbar />
            <div id="main">
          <div class="fof">
                <h1>Error 404  <Return href='/'>Return Home</Return></h1>
               
          </div>
    </div>
    <Footer />
      </>
  );
};

export default NotFound;
