import { createGlobalStyle } from 'styled-components';

export const Base = createGlobalStyle`
    html {
      font-size: 62.5%;
    }

    body {
      font-size: ${props => props.theme.fontSizeMain};
    }
    
    button:not(:disabled):not(.disabled) {
      cursor: pointer;
    }
    
    * {
      outline: none;
      transition: width 1s, height 1s;
    }
    
    button:disabled {
      cursor: not-allowed;
    }
    
    p, pre {
      word-break: break-word;
      margin: 0;
    }
    
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-weight: bold;
    }
    
    .vertical {
      flex-direction: column;
    }
    
    svg {
      color: ${props => props.theme.colorMedium};
    }
    
    #root {
      height: 100vh;
      width: 100%;
    }

    a {
      color: ${props => props.theme.colorMedium};
      transition: color .3s ease;
    
      &:hover {
        color: ${props => props.theme.colorMidDark};
      }
    }
}
`;
