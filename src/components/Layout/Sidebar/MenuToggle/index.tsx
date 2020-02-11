import React from 'react';
import { IMenuToggleProps, MenuToggleStatus } from './definitions';

import { ReactComponent as Icon1 } from './icon-1.svg';
import { ReactComponent as Icon2 } from './icon-2.svg';
import { Wrapper } from 'components/Layout/Sidebar/MenuToggle/styled';

const MenuToggle: React.FunctionComponent<IMenuToggleProps & {
    color?: string;
}> = ({ onClick = () => {}, color, isMenuVisible }) => {
    const [iconStatus, setIconStatus] = React.useState<MenuToggleStatus>(
        MenuToggleStatus.INITIAL,
    );
    // isFirstTime is needed to avoid animation when starting the application
    const [isFirstTime, setIsFirstTime] = React.useState<boolean>(true);

    const handleClick = () => {
        onClick();
    };

    React.useEffect(() => {
        if (isFirstTime) {
            setIsFirstTime(false);
            return;
        }

        if (
            isMenuVisible &&
            (iconStatus === MenuToggleStatus.INITIAL ||
                iconStatus === MenuToggleStatus.DEFAULT)
        ) {
            setIconStatus(MenuToggleStatus.OPEN);
        }

        if (!isMenuVisible && iconStatus === MenuToggleStatus.OPEN) {
            setIconStatus(MenuToggleStatus.DEFAULT);
        }
    }, [isMenuVisible, isFirstTime, iconStatus]);

    return (
        <Wrapper onClick={handleClick} status={iconStatus} color={color}>
            <Icon1 className="svg-1" />
            <Icon2 className="svg-2" />
        </Wrapper>
    );
};

export default React.memo(MenuToggle);
