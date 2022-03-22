import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }

  body {
    font-size: 14px;
    background: linear-gradient(to right, #0061FF, #1885FF, #30A8FF);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    cursor: pointer;
  }

  input {
    outline: none;
  }
`;
