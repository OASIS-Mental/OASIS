import styled from "styled-components";
import Background from "../../../assets/imgHome/template.svg";


//Header
export const Header = styled.header`
   background: url("${Background}") no-repeat center center/cover;
   height: 68vh;
`

export const Container = styled.div`
    display: flex;
    height: 120px;
`
export const Logo = styled.img`
    display: flex;
    width: 170px;
    margin-left: 44px;
`
export const Nav = styled.nav`
    display: flex;
    margin-left: auto; 
    margin-right: 20px;
    align-items: center;
    gap:20px;
    
`
export const NavLink = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 201px;
    height: 44px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Irish Grover';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #156B5D;
    transition: all 0.3s ease; 


    &:hover {
        transform: translateY(-3px); 
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    }


    &:hover:active {
        transform: translateY(0);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

`

