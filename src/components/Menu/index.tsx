import React from 'react';
import MenuItem, { IMenuItem } from 'components/Menu/Item';
import { History } from 'history';
import { IStyledBase, TCallback } from 'helpers/definitions';
import styled from 'styled-components';

interface IMenu extends IStyledBase {
    items: IMenuItem[];
    history: History;
    onSelect?: TCallback;
}

const Menu: React.FunctionComponent<IMenu> = ({
    items,
    history,
    className,
    onSelect,
}) => {
    const [location, setLocation] = React.useState(history.location.pathname);

    React.useEffect(() => {
        history.listen(location => setLocation(location.pathname));
    }, [history]);

    const handleSelect = (url: string) => {
        history.push(url);
        if (onSelect) {
            onSelect();
        }
    };

    return (
        <div className={className}>
            <ul>
                {items.map((item, index) => (
                    <MenuItem
                        {...item}
                        key={`menuItem_${index}`}
                        onClickHandler={() => handleSelect(item.url)}
                        isActive={location === item.url}
                    />
                ))}
            </ul>
        </div>
    );
};

export default styled(React.memo(Menu))`
    width: 100%;
    text-align: right;
    margin: ${props => props.theme.mSize};

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;
