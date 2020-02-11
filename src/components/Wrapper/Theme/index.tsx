import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { lighten } from 'polished';
import { Base } from 'components/Wrapper/Theme/base';
import { Typography } from 'components/Wrapper/Theme/typography';

const theme: DefaultTheme = {
    colorDark: '#0d0d0d',
    colorMidDark: '#591d28',
    colorMedium: '#8c3243',
    colorMidLight: '#bfa3b2',
    colorLight: '#f2c8c4',
    colorWhite: lighten(0.4, '#f2c8c4'),
    colorText: '#434343',
    fontFamily1: "'Roboto Condensed', monospace",
    fontFamily2: "'Open Sans', sans-serif",

    fontSizeMain: '1.6rem',
    fontSizeH1: '4.883rem',
    fontSizeH2: '3.906rem',
    fontSizeH3: '3.125rem',
    fontSizeH4: '2.5rem',
    fontSizeH5: '2.0rem',

    fontSizeSmall: '1.3rem',
    fontSizeXsmall: '1.024rem',
    fontSizeMedium: '1.8rem',

    // Spacing
    xxsSize: '0.4rem',
    xsSize: '0.8rem',
    sSize: '1.2rem',
    mSize: '1.6rem',
    msSize: '2rem',
    lSize: '3.2rem',
    xlSize: '4.8rem',
    xxlSize: '5.4rem',

    littleShadow: `boxShadow: 0 0 8px 0 rgba(#6A6B60, 0.42);`,

    borderRadiusDefault: '5px',
};

const ThemeWrapper: React.FunctionComponent = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Base />
            <Typography />
            {children}
        </ThemeProvider>
    );
};

export default ThemeWrapper;
