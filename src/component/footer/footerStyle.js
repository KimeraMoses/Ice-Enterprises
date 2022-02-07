import styled from 'styled-components'

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px){
        justify-content: center;
        order: 3;
        margin-top: 5px;
    }
`
export const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1024px){
        justify-content: center;
    }
`
export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 1024px){
        justify-content: center;
        margin-top: 5px;

    }


`
export const CenterText = styled.span`
    font-size: 28px;   
    color: #40a9ff; 
    font-weight: bold;

    @media screen and (max-width: 600px){
        font-size: 0.75rem
    }

`
export const LeftCaption = styled.div`
    font-size: 20px;
    color: white;

    @media screen and (max-width: 600px){
        font-size: 0.75rem
    }
`

export const FootIcon = styled.div`
    display: flex;
    border: 2px white solid;
    border-radius: 50%;
    padding: 2px;
    margin-left: 15px;
    width: 25px;
    height: 25px;
    cursor: pointer;
`
export const InfoCaption = styled.span`
    font-size: 20px;
    color: white;
    margin-left:5px;

    @media screen and (max-width: 600px){
        font-size: 0.75rem
    }

`
export const Info = styled.a`
    text-align: center;
    margin-left: 10px
    
`
export const RightContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const FootCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export  const FootContent = styled.div`
    display: flex;
    background-color: transparent;
    margin: 0px 15px;
    padding: 10px 12px;

    @media screen and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        text-align: center;
    }

`
export const Link = styled.a`
    color: white;
    text-decoration: none;
    cursor: pointer;
`