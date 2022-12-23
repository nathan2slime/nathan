import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box; 
    user-select: none;
    -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
    user-zoom: none;

    font-family: ${({ theme }) => theme.fontFamily};
  }
`;
