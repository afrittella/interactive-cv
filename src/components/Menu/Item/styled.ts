import styled from 'styled-components';
import { lighten } from 'polished';
import { IMenuItem } from 'components/Menu/Item/index';

export const Item = styled.li<Pick<IMenuItem, 'isActive'>>`
    padding: ${props =>
    `${props.theme.xsSize} ${props.theme.mSize} ${props.theme.xsSize} 0`};
    border-right: 4px solid transparent;
    transition: border-color 0.3s ease;
    font-size: ${props => props.theme.fontSizeH5};

    a {
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        color: ${props =>
    props.isActive
        ? props.theme.colorWhite
        : lighten(0.2, props.theme.colorMedium)};

        &:hover {
            color: ${props => props.theme.colorLight};
        }

        span {
            font-size: ${props => props.theme.fontSizeH4};
            color: ${props => props.theme.colorLight};
        }
    }

    border-color: ${props => (props.isActive ? props.theme.colorLight : '')};
`;