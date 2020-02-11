import { IStyledBase } from 'helpers/definitions';

export enum IconType {
    FACEBOOK = 'facebook',
    LINKEDIN = 'linkedin',
    GITHUB = 'github',
    EMAIL = 'email',
    EDUCATION = 'education',
    WORK = 'work',
    MUSIC = 'music',
    BABY = 'baby',
    MENU = 'menu',
}

export interface ILinkIcon extends IStyledBase {
    url?: string;
    target?: string;
}

export interface IIcon extends IStyledBase {
    url?: string;
    type: IconType;
}
