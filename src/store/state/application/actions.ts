import {
    ApplicationActions,
    IApplicationAction,
    IApplicationState,
} from 'store/state/application/definitions';

export const setIsSmall = (payload: IApplicationState): IApplicationAction => ({
    type: ApplicationActions.SET_IS_SMALL,
    payload,
});

export const setIsFetching = (): IApplicationAction => ({
    type: ApplicationActions.SET_IS_FETCHING,
});

export const setIsNotFetching = (): IApplicationAction => ({
    type: ApplicationActions.SET_IS_NOT_FETCHING,
});
