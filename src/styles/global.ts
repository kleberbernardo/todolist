import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary-color-light: #F8BBC2;
        --primary-color-dark: #9E73C8;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-image: linear-gradient(to right, var(--primary-color-light) , var(--primary-color-dark));
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
        border: none;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
