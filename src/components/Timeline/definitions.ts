import React from 'react';
import { IStyledBase } from 'helpers/definitions';

export enum ItemType {
    WORK = 'work',
    EDUCATION = 'education',
    MUSIC = 'music',
    BABY = 'baby',
}

interface IItemData {
    headline?: {
        date: string;
        extra?: string;
    };
    subtitle?: string;
}

export interface IItemConfiguration extends IItemData {
    type: ItemType;
    text: string;
}

export interface IItem extends IItemData, IStyledBase {
    icon: React.ReactNode;
    isSmall?: boolean;
}
