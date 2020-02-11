import { IBaseModel } from 'data/models/definitions';
import { ISkillEntity } from 'data/entities/skill/definitions';

export interface ISkillModel extends IBaseModel<ISkillEntity> {
    label: string;
    type: string;
    level: number;
    years: number;
    formula: number;
}
