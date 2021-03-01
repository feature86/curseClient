import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

/*
WARNING: DO NOT USE @import in createGlobalStyles
see: https://github.com/styled-components/styled-components/issues/2911#issuecomment-592012166
*/

const GlobalStyle = createGlobalStyle`
${normalize}


  html,
  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  *,
  ::before,
  ::after {
    box-sizing: unset;
  }

`;

export default GlobalStyle;
