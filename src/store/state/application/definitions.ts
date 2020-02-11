import { IAction } from 'store/helpers/definitions';

export enum ApplicationActions {
    SET_IS_SMALL = 'app/setIsSmall',
    SET_IS_FETCHING = 'app/setIsFetching',
    SET_IS_NOT_FETCHING = 'app/setIsNotFetching',
}

export interface IApplicationState {
    isSmall?: boolean;
    isFetching?: boolean;
}

export interface IApplicationAction extends IAction<IApplicationState> {}
