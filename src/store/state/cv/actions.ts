import { CVActions, ICVAction, ICVState } from 'store/state/cv/definitions';

export const setProfile = (payload: ICVState): ICVAction => ({
    type: CVActions.SET_PROFILE,
    payload,
});

export const setLanguages = (payload: ICVState): ICVAction => ({
    type: CVActions.SET_LANGUAGES,
    payload,
});

export const setLinks = (payload: ICVState): ICVAction => ({
    type: CVActions.SET_LINKS,
    payload,
});

export const setJobs = (payload: ICVState): ICVAction => ({
    type: CVActions.SET_JOBS,
    payload,
});

export const setSkills = (payload: ICVState): ICVAction => ({
    type: CVActions.SET_SKILLS,
    payload,
});

export const reset = (): ICVAction => ({
    type: CVActions.RESET,
});
