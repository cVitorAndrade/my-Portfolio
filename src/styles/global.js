import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    :root {
        font-size: 52.5%;
    }

    body {
        background-color: ${( { theme }) => theme.COLORS.BACKGROUND};
        font-size: 1.6rem;
        height: 100vh;
    }

    a {
        text-decoration: none;
        color: ${( { theme }) => theme.COLORS.BLACK_100};
    }
    
    a:hover, button:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }

    h2 {
        color: ${ ({ theme }) => theme.COLORS.BLACK_300};
        font-size: 2.4rem;
        font-weight: 500;
    }
`;