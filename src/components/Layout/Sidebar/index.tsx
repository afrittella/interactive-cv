import React from 'react';
import MenuToggle from 'components/Layout/Sidebar/MenuToggle';
import styled from 'styled-components';
import { IStyledBase, TCallback } from 'helpers/definitions';
import { Hamburger, SidebarContent } from 'components/Layout/Sidebar/styled';

export interface ISidebar extends IStyledBase {
    isVisible?: boolean;
    isSmall?: boolean;
    onHamburgerClick?: TCallback;
}

const Sidebar: React.FunctionComponent<ISidebar> = ({
    children,
    isVisible = false,
    isSmall,
    onHamburgerClick,
    className,
}) => {
    return (
        <>
            {isSmall && (
                <Hamburger isSidebarVisible={isVisible}>
                    <MenuToggle
                        onClick={onHamburgerClick}
                        isMenuVisible={isVisible}
                    />
                </Hamburger>
            )}
            <SidebarContent isSidebarVisible={isVisible} isSmall={isSmall}>
                {children}
            </SidebarContent>
        </>
    );
};

export default styled(Sidebar)``;
