import React from 'react';
import { IStyledBase, TCallback } from 'helpers/definitions';
import { Item } from 'components/Menu/Item/styled';

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
    highlightFirstLetter = true,
    className,
    isActive,
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
        <Item isActive={isActive}>
            <a href={url} onClick={handleClick}>
                {getLabel(label)}
            </a>
        </Item>
    );
};

export default React.memo(MenuItem);
