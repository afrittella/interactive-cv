import { IProfileEntity } from 'data/entities/profile/definitions';
import { ILanguageEntity } from 'data/entities/language/definitions';
import { IDictionary } from 'helpers/definitions';
import { ILinksEntity } from 'data/entities/link/definitions';
import { IJobEntity } from 'data/entities/job/definitions';
import { ISkillEntity } from 'data/entities/skill/definitions';

export interface ICVEntity {
    profile: IProfileEntity;
    languages: IDictionary<ILanguageEntity>;
    links: ILinksEntity;
    jobs: IJobEntity[];
    skills: ISkillEntity[];
}
