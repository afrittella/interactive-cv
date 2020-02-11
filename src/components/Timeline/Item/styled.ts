import styled, { css } from 'styled-components';
import { bounce1, bounce2 } from 'components/Wrapper/Theme/animations';
import { smallShadow } from 'components/Wrapper/Theme/utils';

interface IAnimatedElement {
    isVisible?: boolean;
    isSmall?: boolean;
}

export const ItemIcon = styled.div<IAnimatedElement>`
    order: 1;
    flex: 0 0 ${props => props.theme.xlSize};
    height: ${props => props.theme.xlSize};
    border-radius: 50% 0 0 50%;
    background-color: ${props => props.theme.colorWhite};
    color: ${props => props.theme.colorMedium};
    margin-top: ${props => props.theme.xxsSize};
    padding-left: ${props => props.theme.xxsSize};
    z-index: 4;
    box-shadow: 0 0 0 4px ${props => props.theme.colorMidDark},
        inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        display: block;
        width: ${props => props.theme.lSize};
        height: ${props => props.theme.lSize};
        position: relative;
    }

    visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
    ${props =>
        props.isVisible &&
        css`
            animation: ${bounce1} 0.6s;
        `}
`;

export const ItemContent = styled.div<IAnimatedElement>`
    order: 0;
    flex: 0 1 auto;
    ${smallShadow}
    background-color: ${props => props.theme.colorWhite};
    padding: ${props => `${props.theme.xsSize} ${props.theme.mSize}`};
    margin: -${props => `${props.theme.xsSize} ${props.theme.lSize}`} 0 0;
    border-top: ${props => props.theme.xxsSize} solid
        ${props => props.theme.colorMedium};

    visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
    ${props =>
        props.isVisible &&
        css`
            animation: ${bounce2} 0.6s;
        `}
`;

export const ItemDate = styled.div<IAnimatedElement>`
    order: ${props => (props.isSmall ? '0' : '1')};
    font-family: ${props => props.theme.fontFamily1};
    padding: ${props => `${props.theme.xxsSize} ${props.theme.xsSize}`};
    border-radius: ${props => props.theme.borderRadiusDefault};
    background-color: ${props => props.theme.colorMedium};
    color: ${props => props.theme.colorLight};
    font-weight: 500;
    font-size: ${props =>
        props.isSmall ? props.theme.fontSizeSmall : props.theme.fontSizeMedium};
`;

export const ItemExtra = styled.div<IAnimatedElement>`
    order: 0;
    margin-right: ${props => props.theme.sSize};
`;

export const ItemHeadline = styled.div<IAnimatedElement>`
    display: flex;
    flex-direction: ${props => (props.isSmall ? 'column' : 'row')};
    align-items: ${props => (props.isSmall ? 'flex-start' : 'center')};
    justify-content: space-between;
    margin-bottom: ${props => props.theme.xsSize};
    ${props =>
        props.isSmall &&
        css`
            margin: 0;
        `}
`;

export const ItemSubtitle = styled.h4<IAnimatedElement>`
    font-size: ${props => props.theme.fontSizeMain};
`;

export const ItemText = styled.div<IAnimatedElement>`
    p {
        margin: ${props => props.theme.sSize} 0;
        white-space: pre-wrap;
        text-align: left;
    }
`;
