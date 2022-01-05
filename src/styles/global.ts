import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f4f4f4 ;
    -webkit-font-smoothing: antialiased;

    a {
      color: #3a3535; /* blue colors for links too */
      text-decoration: none; /* no underline */
    }

  }
  body, input, button {
    font: 16px "Poppins", sans-serif;
  }
  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    height: 100vh;
    color: #3a3535;
    font-family: 'Ubuntu', sans-serif;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    background: #ff7315;
    height: 80px;
    padding: 8px;

    img {
        height: 100%;
        border-radius: 50%;
        -webkit-box-shadow: 3px 2px 5px -2px rgba(35,32,32,1);
        -moz-box-shadow: 3px 2px 5px -2px rgba(35,32,32,1);
        box-shadow: 3px 2px 5px -2px rgba(35,32,32,1);
    }

    svg {
        font-size: 24px;
        cursor: pointer;
    }
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-flow: row wrap;
    padding: 24px;
    overflow: auto;
    text-decoration: none;

    section {
        overflow: hidden;
        padding-left: 12px;

        & + section {
            margin-top: 32px;
        }
    
        > strong {
          font-size: 24px;
        }

        ul {
         padding: 8px;
        }

        li { 
          padding: 4px;
        }

        a {
          margin-right: 8px;

          img {
            width: 40px;
            height: 40px;
          }

        }
    }

    hr {
        width: 90vw;
        margin-bottom: 16px;
    }
    
`;