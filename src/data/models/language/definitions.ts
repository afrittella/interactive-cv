import { IBaseModel } from 'data/models/definitions';
import { ILanguageEntity } from 'data/entities/language/definitions';

export interface ILanguageModel extends IBaseModel<ILanguageEntity> {
    name: string;
    level: number;
    isMain: boolean;
}
