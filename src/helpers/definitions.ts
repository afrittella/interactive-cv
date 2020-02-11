import React from 'react';
import { DefaultTheme } from 'styled-components';

export enum JSTypeof {
    UNDEFINED = 'undefined',
    FUNCTION = 'function',
    OBJECT = 'object',
    STRING = 'string',
    NUMBER = 'number',
}

export type TFunction = (...args: any[]) => any;

export type TEmptyCallback = () => void;

export type TCallback = TEmptyCallback | TFunction;

export type TRenderFunction<T> = (options?: T) => JSX.Element;

export type TRender<T = any> = TRenderFunction<T> | React.ReactNode;

export interface IDictionary<T = any> {
    [key: string]: T;
}

export interface IStyledBase {
    theme?: DefaultTheme;
    className?: string;
}
