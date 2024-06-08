import styled, { keyframes } from 'styled-components';

// Definindo a animação de balanço
const swingAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 150px auto;
    animation: ${swingAnimation} 6s ease infinite; 

    @media screen and (max-width: 1700px) {
        max-width: 500px;
        margin: 90px auto;
    }

    @media screen and (max-width: 1300px) {
        font-size: 14px;
        max-height: 500px;
        margin: 100px auto;
    }

    @media screen and (max-width: 1200px) {
        font-size: 14px;
        max-height: 480px;
        margin: 100px auto;
    }

    @media screen and (max-width: 768px) {
        max-width: 500px;
        margin: 100px auto;
    }

    @media screen and (max-width: 480px) {
        max-width: 500px;
        font-size: 14px;
        margin: 100px auto;
     }
`;

export const FormTitle = styled.h2`
    color: #333;
    margin-bottom: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Label = styled.label`
    margin-bottom: 10px;
    color: #555;
    font-weight: bold;
`;

export const Input = styled.input`
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
`;

export const Textarea = styled.textarea`
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
`;

export const Button = styled.button`
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin-bottom: 20px;

    &:hover {
        background-color: #45a049;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    &:active {
        background-color: #3e8e41;
        transform: translateY(0);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;
