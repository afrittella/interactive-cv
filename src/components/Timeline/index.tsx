import React from 'react';
import Item from 'components/Timeline/Item';
import { IItem, IItemConfiguration } from 'components/Timeline/definitions';
import Icon from 'components/Icon';
import { IconType } from 'components/Icon/definitions';
import styled from 'styled-components';
import { IStyledBase } from 'helpers/definitions';

interface ITimeline extends IStyledBase {
    itemsConfiguration: IItemConfiguration[];
    isSmall?: boolean;
}

const Timeline: React.FunctionComponent<ITimeline> = ({
    itemsConfiguration,
    isSmall = false,
    className,
}) => {
    const getItem = (
        itemConfiguration: IItemConfiguration,
        index: number,
    ): React.ReactNode => {
        const icon = (
            <Icon type={(itemConfiguration.type as unknown) as IconType} />
        );
        const itemData: IItem = {
            ...itemConfiguration,
            icon,
        };
        return (
            <Item key={`timelineitem_${index}`} {...itemData} isSmall={isSmall}>
                <p>{itemConfiguration.text}</p>
            </Item>
        );
    };

    return (
        <div className={className}>
            {itemsConfiguration.map((item, index) => getItem(item, index))}
        </div>
    );
};

export default styled(Timeline)`
    width: ${props => (props.isSmall ? '95' : '80')}%;
    position: relative;

    :before {
        content: '';
        position: absolute;
        top: 0;
        right: calc(
            (${props => props.theme.xlSize} / 2) -
                ${props => props.theme.xsSize}
        );
        height: 100%;
        width: ${props => props.theme.xxsSize};
        background: ${props => props.theme.colorMidDark};
        z-index: 1;
    }
`;
