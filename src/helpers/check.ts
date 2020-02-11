import { JSTypeof, TFunction } from './definitions';

export const isBrowser = typeof window !== 'undefined';

export const isFunction = <T extends TFunction>(value: any): value is T =>
    value !== null && typeof value === JSTypeof.FUNCTION;

export const isString = (value: any) =>
    typeof value === 'string' || value instanceof String;
