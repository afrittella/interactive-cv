import { IBaseModel } from 'data/models/definitions';
import {
    IAddressEntity,
    IProfileEntity,
} from 'data/entities/profile/definitions';

export interface IAddressModel extends IBaseModel<IAddressEntity> {
    street: string;
    number: string;
    cap: string;
    city: string;
    country: string;
}

export interface IProfileModel extends IBaseModel<IProfileEntity> {
    firstName: string;
    lastName: string;
    phone: string;
    address: IAddressModel;
    headline: string;
    bio: string;
}
