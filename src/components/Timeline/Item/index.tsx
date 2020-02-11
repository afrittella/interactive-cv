import React from 'react';
import { useTrackVisibility } from 'react-intersection-observer-hook';
import { IItem } from 'components/Timeline/definitions';
import styled from 'styled-components';
import {
    ItemContent,
    ItemDate,
    ItemExtra,
    ItemHeadline,
    ItemIcon,
    ItemSubtitle,
    ItemText,
} from 'components/Timeline/Item/styled';

const Item: React.FunctionComponent<IItem> = ({
    headline,
    subtitle,
    icon,
    children,
    className,
    isSmall,
}) => {
    const [elementRef, { isVisible }] = useTrackVisibility();
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        if (isVisible) {
            setVisible(true);
        }
    }, [isVisible]);

    return (
        <div className={className}>
            <ItemIcon ref={elementRef} isVisible={visible}>
                {icon}
            </ItemIcon>
            <ItemContent isVisible={visible}>
                {headline && (
                    <ItemHeadline isSmall={isSmall}>
                        <ItemDate isSmall={isSmall}>{headline?.date}</ItemDate>
                        {headline?.extra && (
                            <ItemExtra>
                                {isSmall ? (
                                    <h4>{headline?.extra}</h4>
                                ) : (
                                    <h4>{headline?.extra}</h4>
                                )}
                            </ItemExtra>
                        )}
                    </ItemHeadline>
                )}
                {subtitle && <ItemSubtitle>{subtitle}</ItemSubtitle>}
                <ItemText isSmall={isSmall}>{children}</ItemText>
            </ItemContent>
        </div>
    );
};

export default styled(Item)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: ${props => props.theme.lSize};
    margin-top: ${props => props.theme.sSize};
    width: 100%;
    z-index: 1;
`;
