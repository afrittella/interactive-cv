import { IProfileModel } from 'data/models/profile/definitions';
import { IAction } from 'store/helpers/definitions';
import { ILanguageModel } from 'data/models/language/definitions';
import { ILinksModel } from 'data/models/link/definitions';
import { IJobModel } from 'data/models/job/definitions';
import { ISkillModel } from 'data/models/skill/definitions';

export enum CVActions {
    SET_PROFILE = 'cv/setprofile',
    SET_LANGUAGES = 'cv/setlanguages',
    SET_LINKS = 'cv/setlinks',
    SET_JOBS = 'cv/setjobs',
    SET_SKILLS = 'cv/setskills',
    RESET = 'cv/reset',
}

export interface ICVState {
    profile?: IProfileModel;
    languages?: ILanguageModel[];
    links?: ILinksModel;
    jobs?: IJobModel[];
    skills?: ISkillModel[];
}

export interface ICVAction extends IAction<ICVState> {}
