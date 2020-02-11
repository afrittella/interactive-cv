import { IBaseModel } from 'data/models/definitions';
import { ILinksEntity } from 'data/entities/link/definitions';
import { IDictionary } from 'helpers/definitions';

export interface ILinksModel extends IBaseModel<ILinksEntity> {
    links: IDictionary<string>;
    getLink(key: string): string | undefined;
}
