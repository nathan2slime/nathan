import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box; 
    user-select: none;
    user-zoom: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;

    font-family: ${({ theme }) => theme.fontFamily};
  }

  @media(min-width: 500px) {
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.foregroundColorUp};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: ${({ theme }) => theme.foregroundColorDown};
    }
  }
`;
