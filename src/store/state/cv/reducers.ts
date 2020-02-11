import { CVActions, ICVAction, ICVState } from 'store/state/cv/definitions';
import { IReducerMap } from 'store/helpers/definitions';
import createReducer from 'store/helpers/createReducer';

const initialState: ICVState = {
    profile: undefined,
};

const reducerMap: IReducerMap<ICVState, ICVAction> = {
    [CVActions.SET_PROFILE]: (state, action) => {
        const { payload: { profile } = initialState } = action;

        return {
            ...state,
            profile,
        };
    },

    [CVActions.SET_LANGUAGES]: (state, action) => {
        const { payload: { languages } = initialState } = action;

        return {
            ...state,
            languages,
        };
    },

    [CVActions.SET_LINKS]: (state, action) => {
        const { payload: { links } = initialState } = action;

        return {
            ...state,
            links,
        };
    },

    [CVActions.SET_JOBS]: (state, action) => {
        const { payload: { jobs } = initialState } = action;

        return {
            ...state,
            jobs,
        };
    },

    [CVActions.SET_SKILLS]: (state, action) => {
        const { payload: { skills } = initialState } = action;

        return {
            ...state,
            skills,
        };
    },

    [CVActions.RESET]: state => ({
        ...initialState,
    }),
};

const reducer = createReducer(initialState)(reducerMap);

export default reducer;
