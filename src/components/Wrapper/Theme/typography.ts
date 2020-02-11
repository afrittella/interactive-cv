import { createGlobalStyle } from 'styled-components';

export const Typography = createGlobalStyle`
h1 {
  font-size: ${props => props.theme.fontSizeH1};
}

h2 {
  font-size: ${props => props.theme.fontSizeH2};
}

h3 {
  font-size: ${props => props.theme.fontSizeH3};
}

h4 {
  font-size: ${props => props.theme.fontSizeH4};
}

h5 {
  font-size: ${props => props.theme.fontSizeH5};
}

body, h1,h2,h3,h4,h5 {
  font-family: ${props => props.theme.fontFamily1};
}

p {
  font-family: ${props => props.theme.fontFamily2};
  font-size: ${props => props.theme.fontSizeMain};
  line-height: ${props => props.theme.fontSizeH3};
  white-space: pre-wrap;
}
`;
