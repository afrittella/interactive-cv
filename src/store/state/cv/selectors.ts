import { IRootState } from 'store/definitions';
import { groupBy } from 'helpers/utilities';

export const selectCVState = (state: IRootState) => state.cv;

export const selectProfile = (state: IRootState) =>
    selectCVState(state).profile;

export const selectLanguages = (state: IRootState) => {
    const languages = selectCVState(state).languages;

    return (
        languages && languages.sort((a, b) => (a.isMain < b.isMain ? 1 : -1))
    );
};

export const selectLinks = (state: IRootState) => selectCVState(state).links;

export const selectJobs = (state: IRootState) => {
    const jobs = selectCVState(state).jobs;

    return jobs && jobs.sort((a, b) => (a.from < b.from ? 1 : -1));
};

export const selectSkills = (state: IRootState) => {
    const skills = selectCVState(state).skills;

    return skills && skills.sort((a, b) => (a.level < b.level ? 1 : -1));
};

export const selectGroupedSkills = (state: IRootState) => {
    const skills = selectCVState(state).skills;

    if (skills) {
        skills.sort((a, b) => (a.type > b.type ? 1 : -1));
    }

    return skills && groupBy('type', 'formula')(skills);
};
