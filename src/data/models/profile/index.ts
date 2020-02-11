import { IAddressModel, IProfileModel } from 'data/models/profile/definitions';
import {
    IAddressEntity,
    IProfileEntity,
} from 'data/entities/profile/definitions';

export class AddressModel implements IAddressModel {
    private readonly props: IAddressEntity;

    constructor(props: IAddressEntity) {
        this.props = props;
    }

    get __innerprops__() {
        return this.props;
    }

    get street() {
        return this.props.street;
    }

    get number() {
        return this.props.number;
    }

    get cap() {
        return this.props.number;
    }

    get city() {
        return this.props.city;
    }

    get country() {
        return this.props.country;
    }

    toDb(): IAddressEntity {
        return {
            street: this.props.street,
            number: this.props.number,
            city: this.props.city,
            cap: this.props.cap,
            country: this.props.country,
        };
    }
}

export class ProfileModel implements IProfileModel {
    private readonly props: IProfileEntity;

    constructor(props: IProfileEntity) {
        this.props = props;
    }

    get __innerprops__() {
        return this.props;
    }

    get firstName() {
        return this.props.firstName;
    }

    get lastName() {
        return this.props.lastName;
    }

    get phone() {
        return this.props.phone;
    }

    get address() {
        return new AddressModel(this.props.address);
    }

    get headline() {
        return this.props.headline;
    }

    get bio() {
        return this.props.bio;
    }

    toDb(): IProfileEntity {
        return {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            phone: this.props.phone,
            address: this.props.address,
            headline: this.props.headline,
            bio: this.props.bio,
        };
    }
}
