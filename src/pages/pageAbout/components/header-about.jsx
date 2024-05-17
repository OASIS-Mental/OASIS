import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:40px auto;
    width: 1784px;
    height: 100px;
    left: 133px;
    background: linear-gradient(90deg, rgba(46, 85, 79, 0.16) 0%, rgba(46, 85, 79, 0.16) 100%);
    box-shadow: 17px 17px 24px rgba(0, 0, 0, 0.25);
    border-radius: 38px;

`;

export const ImagemLogo = styled.img`
    margin-left: 30px;
`;

export const NavHeader = styled.div`
    display: flex;
    gap: 30px;
    margin-right: 50px;
   
`;
export const NavLink = styled.a`
    font-family: 'Irish Grover';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 36px;
    color: #0D473F;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease; 

    &:hover {
        color: #03100e;
        transform: scale(1.05);
    }
`;

