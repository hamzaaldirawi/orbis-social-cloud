import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        background: #F3F3F3;
    }

    .no_padding {
        padding-left: 0;
        padding-right: 0;
    }

    p {
        margin-bottom: 0;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`