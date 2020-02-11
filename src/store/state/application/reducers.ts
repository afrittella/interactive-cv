import {
    ApplicationActions,
    IApplicationAction,
    IApplicationState,
} from 'store/state/application/definitions';
import { IReducerMap } from 'store/helpers/definitions';
import createReducer from 'store/helpers/createReducer';

const initialState: IApplicationState = {
    isSmall: false,
    isFetching: false,
};

const reducerMap: IReducerMap<IApplicationState, IApplicationAction> = {
    [ApplicationActions.SET_IS_SMALL]: (state, action) => {
        const { payload: { isSmall } = initialState } = action;

        return {
            ...state,
            isSmall,
        };
    },

    [ApplicationActions.SET_IS_FETCHING]: (state, action) => ({
        ...state,
        isFetching: true,
    }),

    [ApplicationActions.SET_IS_NOT_FETCHING]: (state, action) => ({
        ...state,
        isFetching: false,
    }),
};

const reducer = createReducer(initialState)(reducerMap);

export default reducer;
