import styled from 'styled-components';

export const StyledOverlay = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
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
`;

export const StyledMessageBox = styled.div`
    width: 30%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    
    p{
        margin-bottom: 20px;
        font-family: 'Lemon', sans-serif;
        font-size: 22px;
    }
`;

export const StyledButtonOK = styled.button`
    background-color: #156B5D;
    margin-left: 5px;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Lemon', sans-serif;
    font-size: 20px;
    margin-top: 10px;
`;
