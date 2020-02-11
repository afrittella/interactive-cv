import styled from 'styled-components';
import { fadeIn } from 'components/Wrapper/Theme/animations';
import { smallShadow } from 'components/Wrapper/Theme/utils';

export const Panel = styled.div<{ isSmall?: boolean }>`
    animation: 2s ${fadeIn};
    animation-fill-mode: forwards;
    visibility: hidden;
    padding: ${props => props.theme.sSize};
    white-space: pre-wrap;
    width: ${props => (props.isSmall ? '95' : '75')}%;

    p {
        text-align: ${props => (props.isSmall ? 'justify' : 'center')}%;
    }

    h5 {
        text-transform: uppercase;
        margin-bottom: ${props => props.theme.xsSize};
        color: ${props => props.theme.colorMidDark};
    }
`;

export const ShadowPanel = styled(Panel)`
    ${smallShadow};
`;

export const ShadowFullWidthPanel = styled(ShadowPanel)`
    text-align: left;
    width: 100%;
`;
