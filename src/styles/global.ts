import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    *, body{
        font-family: ${(props) => props.theme.fonts.roboto};
        font-weight: 400;
        font-size: 1rem;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration:none;
    }

    ul{
        list-style:none
    }
`
