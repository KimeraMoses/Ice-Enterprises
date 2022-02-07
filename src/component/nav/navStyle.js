import styled from "styled-components"
import Icon from '@mdi/react';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    
`
export const Section = styled.section`
    display: flex;
    width: 100%;
    height: inherit;
    flex-direction: column;

`
export const NavLinks = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: white;
    margin-left: 15px;
    margin-right: 15px;
    max-width: 220px;
    padding: 10px;
    margin-top: 8px;
    cursor: pointer;

    &:hover {
        border-radius: 5px;
        background-color: #40a9ff;
    }

`
export const BarIcon = styled(Icon)`
    margin-right: 5px;
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    border: 3px #40a9ff solid;
    border-radius: 50%;
    margin-left: 80px;
    width: 103px;
    height: 103px;
`
export const Logo = styled.img`
    width: 50px;
    height: 50px;
`
export const Top = styled.div`
    margin-bottom: 37px;
`
