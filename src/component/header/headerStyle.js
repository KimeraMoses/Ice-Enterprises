import styled from "styled-components"
import Icon from '@mdi/react';
import {ReactComponent as ReactLogo} from './headerIcons/Logo.svg';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 20px 10px;
    background-color: transparent;
`
export const Left = styled.div`
    flex: 1;
    margin: 10px
`
export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const Info = styled.a`
    text-decoration: none;
    margin-left: 20px;
    text-align: center;
    color: white;
    font-size: 20px;
    cursor: pointer;
    

`
export const DropDownLinks = styled.div`
    display: flex;


    @media screen and (max-width: 1000px){
        display: none;

            & > a:hover{
            border-bottom: 2px solid black;
        }
    }
`
export const Bars = styled.div`
    display: inline-flex;
    align-items: center;
    position: relative;



    @media screen and (max-width: 1000px){
        &:hover > div{
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0;
            right: 0;
            transform: translateY(20%);
            font-size: 1rem;
            background-color: black;
            /* background-color: white; */
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            padding: 12px 16px;
            color: white;
            transition: all 20.0s ease-in-out;
            transition: transform 5s; *
            z-index: 1;
        }
    }

    @media screen and (max-width: 600px){
        &:hover > div{
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(7%,20%);
            font-size: 1rem;
            background-color: black;
            /* background-color: white; */
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            padding: 12px 16px;
            color: white;
            transition: all 20.0s ease-in-out;
            transition: transform 5s; 
            z-index: 1;
        }
    }
`
export const BarIcon = styled(Icon)`
    display: none;

    @media screen and (max-width: 1000px ) {
        display: flex;
        color: white;
    }

`
export const Logo = styled(ReactLogo)`

`
export const IconWrap = styled.div`
    display: flex;
    border: 2px white solid;
    margin-left: 10px;
    border-radius: 50%;
    padding: 3px;
    width:25px;
    height: 25px;
    cursor: pointer;

    @media screen and (max-width: 600px){
        display: none;
    }

`
