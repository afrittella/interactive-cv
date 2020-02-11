export interface IAddressEntity {
    street: string;
    number: string;
    cap: string;
    city: string;
    country: string;
}

export interface IProfileEntity {
    firstName: string;
    lastName: string;
    phone: string;
    address: IAddressEntity;
    headline: string;
    bio: string;
}
