import React from 'react';
import { IStyledBase, TCallback } from 'helpers/definitions';
import styled from 'styled-components';
import { lighten } from 'polished';

export interface IMenuItem extends IStyledBase {
    url: string;
    onClickHandler?: TCallback;
    label: string;
    isActive?: boolean;
    highlightFirstLetter?: boolean;
}

const MenuItem: React.FunctionComponent<IMenuItem> = ({
    url,
    onClickHandler,
    label,
    isActive = false,
    highlightFirstLetter = true,
    className,
}) => {
    const handleClick = (ev: React.MouseEvent) => {
        ev.preventDefault();

        if (onClickHandler) {
            onClickHandler();
        }
    };

    const getLabel = (label: string) => {
        if (highlightFirstLetter) {
            return (
                <>
                    <span>{label.substr(0, 1)}</span>
                    {label.substr(1)}
                </>
            );
        }

        return label;
    };

    return (
        <li className={className}>
            <a href={url} onClick={handleClick}>
                {getLabel(label)}
            </a>
        </li>
    );
};

export default styled(React.memo(MenuItem))`
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
