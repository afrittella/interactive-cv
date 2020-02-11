import { TCallback } from 'helpers/definitions';

export enum MenuToggleStatus {
    INITIAL = 'initial',
    DEFAULT = 'default',
    OPEN = 'open',
}

export interface IWrapperProps {
    status: MenuToggleStatus;
    color?: string;
}

export interface IMenuToggleProps {
    onClick?: TCallback;
    color?: string;
    isMenuVisible?: boolean;
}
