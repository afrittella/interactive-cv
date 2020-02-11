import styled from 'styled-components';
import { ISidebar } from 'components/Layout/Sidebar/index';

export const Hamburger = styled.div<{ isSidebarVisible: boolean }>`
    position: absolute;
    top: ${props => props.theme.sSize};
    left: ${props => props.theme.sSize};
    z-index: 9999;
    padding: ${props => props.theme.xsSize};
    width: ${props => props.theme.xlSize};
    height: ${props => props.theme.xlSize};
    transition: background-color 1s ease-in-out;
    background-color: ${props =>
        props.isSidebarVisible ? 'transparent' : props.theme.colorWhite};

    svg {
        stroke: ${props =>
            props.isSidebarVisible
                ? props.theme.colorMidLight
                : props.theme.colorMidDark};
        transition: stroke 1s ease-in-out;
    }
`;

export const SidebarContent = styled.aside<
    ISidebar & { isSidebarVisible: boolean }
>`
    ${props => {
        if (props.isSmall) {
            return `
                width: 30rem;
                height: 100vh;
                position: fixed;
                overflow: auto;
                top: 0;left: 0;
                z-index: 9998;
                margin-left: -30rem;
            `;
        }
    }}
    
    background-color: ${props => props.theme.colorDark};
    color: ${props => props.theme.colorMedium};
    flex: 0 0 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: margin-left 1s;
    ${props => props.isSidebarVisible && 'margin-left: 0'};
`;
