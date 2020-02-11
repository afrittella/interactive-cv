import { IBaseModel } from 'data/models/definitions';
import { IJobEntity } from 'data/entities/job/definitions';

export interface IJobModel extends IBaseModel<IJobEntity> {
    company: string;
    from: string;
    to: string;
    formattedFrom: string;
    formattedTo: string;
    title: string;
    description: string;
    category: string;
    type: string;
    country: string;
}
