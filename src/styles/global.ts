import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --color-pink-900: #FF83BB;
        --color-pink-200: #FFD7D7;
        --color-purple-900: #9E6B8E;
        --color-gray-200: #fafafa;
        --color-gray-300: #e6e6e6;
        --color-gray-500: #cbcbcb;
        --color-gray-900: #707070;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    html {
        @media (max-width: 2560px) {
            font-size: 112.50%;
        }

        @media (max-width: 1920px) {
            font-size: 	106.25%
        }

        @media (max-width: 1280px) {
            font-size: 100%;
        }

        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-image: linear-gradient(to right, var(--color-pink-200) , var(--color-pink-900));
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
