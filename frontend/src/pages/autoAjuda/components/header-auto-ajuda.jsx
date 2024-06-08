import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    padding: 0 20px;
    width: 100%;
    max-width: 1784px;
    height: 75px;
    background: linear-gradient(90deg, rgba(46, 85, 79, 0.16) 0%, rgba(46, 85, 79, 0.16) 100%);
    box-shadow: 17px 17px 24px rgba(0, 0, 0, 0.25);
    border-radius: 38px;

    @media screen and (max-width: 1700px) {
        font-size: 14px;
        max-height: 60px;
        max-width: 1400px;

    }

    @media screen and (max-width: 1300px) {
        font-size: 14px;
        max-height: 60px;
        max-height: 60px;
    }

    @media screen and (max-width: 1200px) {
        max-height: 60px;
        font-size: 14px;
        max-width: 1000px;

    }

    @media screen and (max-width: 768px) {
        max-width: 650px;
        max-height: 60px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
        max-height: 60px;
     }
    

  
`;

export const ImagemLogo = styled.img`
    height: 50px;
    cursor: pointer;
`;

export const NavHeader = styled.div`
    display: flex;
    gap: 20px;
    margin-right: 20px;
   
    @media screen and (max-width: 768px) {
        gap: 10px;
    }
`;

export const NavLink = styled.nav`
    font-family: 'Irish Grover';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #0D473F;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease; 
    cursor: pointer;

    &:hover {
        color: #03100e;
        transform: scale(1.05);
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`;
