import styled from 'styled-components'


export const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
  margin: 0px 20px;
  padding: 15px 0px;
  border-bottom: 1px white solid;
  
`
export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`
export const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;


`
export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`
export const DashIconContainer = styled.div`
    display: flex;
    justify-content: center;
    border: 2px white solid;
    border-radius: 50%;
    padding: 3px;
    margin-left: 15px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`
export const CenterCaption = styled.h3`
  font-size: 20px;
  color: white;
  margin-left: 20px;

`
export const LeftCaption = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-left: 5px;
`
export const DashLogo = styled.img`
  width: 34px;
  height: 40px;
`
export const Link = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`