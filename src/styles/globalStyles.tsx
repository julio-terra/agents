import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Helvetica, Sans-Serif;
  }

  *, button, input{
    border: 0;
    background: none ;
    font-family: 16px 'Roboto', Helvetica, Sans-Serif;
  }
  button {
    cursor: pointer;
  }
  li{
    text-decoration:none;
    list-style: none;
  }
  :root {
    --primary: #FF4656;
    --secondary: #1F2326;
    --search: #202327;
    --white: #D9D9D9;
    --drug-white: #C4C4C4;
    --gray: #7A7A7A;
    --outline: #2F3336;
  }
`;
 
export default GlobalStyle;