import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: "#fff",
    fontColor: "#121C22"
}

export const darkTheme = {
    body: "#121C22",
    fontColor: "#fff"
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
  }
`;