import { IRootState } from 'store/definitions';

const selectApplicationState = (state: IRootState) => state.application;

export const selectIsSmall = (state: IRootState) =>
    selectApplicationState(state).isSmall;

export const selectIsFetching = (state: IRootState) =>
    !!selectApplicationState(state).isFetching;
