import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        user-select: none;
    }   

    ::-webkit-scrollbar {
        width: 12px; 
    }

    ::-webkit-scrollbar-track {
        background: #fff; 
        border-radius: 10px; 
    }

    ::-webkit-scrollbar-thumb {
        background: #156B5D;  
        border-radius: 10px;  
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #5BB1A4; 
    }

`;
