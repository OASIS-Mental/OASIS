
import styled, { keyframes } from 'styled-components';

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1;
    font-family: 'Lemon', sans-serif;
    font-size: 22px;
`;

export const DiveWelcome = styled.div`
    width: 20%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
`;
export const WelcomeMessage = styled.div`
    padding: 20px;
    border-radius: 10px;
    text-align: center;
`;

export const ThankYouButton = styled.button`
    background-color: #156B5D;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
`;
