import { Dispatch } from 'redux';
import { getCVByName } from 'data/repositories/firebase-cv';
import {
    setJobs,
    setLanguages,
    setLinks,
    setProfile,
    setSkills,
} from 'store/state/cv/actions';
import { ProfileModel } from 'data/models/profile';
import { LanguageModel } from 'data/models/language';
import { LinksModel } from 'data/models/link';
import { JobModel } from 'data/models/job';
import { SkillModel } from 'data/models/skill';

export const getCV = (name: string) => async (dispatch: Dispatch) => {
    try {
        const cv = await getCVByName(name);

        const { profile, languages, links, jobs, skills } = cv;

        const languageModels = [];

        for (let language in languages) {
            languageModels.push(new LanguageModel(languages[language]));
        }

        const profileModel = new ProfileModel(profile);
        const linksModel = new LinksModel(links);
        const jobsModel = jobs.map(job => new JobModel(job));
        const skillsModel = skills.map(skill => new SkillModel(skill));

        dispatch(setProfile({ profile: profileModel }));
        dispatch(setLanguages({ languages: languageModels }));
        dispatch(setLinks({ links: linksModel }));
        dispatch(setJobs({ jobs: jobsModel }));
        dispatch(setSkills({ skills: skillsModel }));
    } catch (e) {
        console.log(e);
    }
};
