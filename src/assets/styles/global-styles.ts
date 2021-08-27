import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --light-blue: #6933FF;
    --blue: #5429CC;

    --green: #33CC95;
    --red: #E62E4D;
    --white: #FFF;

    --light-gray: #F0F2F5;
    --medium-gray: #E7E9EE;
    --gray: #969CB3;
    --dark-gray: #363F5F;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    /* @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    } */
  }

  body {
    background-color: var(--light-gray);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

  .react-modal-overlay {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    position: absolute;
  }
`;
