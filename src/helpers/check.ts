import { JSTypeof, TFunction } from './definitions';

export const isBrowser = typeof window !== 'undefined';

export const isFunction = <T extends TFunction>(value: any): value is T =>
    value !== null && typeof value === JSTypeof.FUNCTION;

export const isCreate = (id?: string) => id === 'create';

export const isUpdate = (id?: string) => !!parseInt(id || '0');

export const isString = (value: any) =>
    typeof value === 'string' || value instanceof String;

export enum PageAction {
    CREATE = 'create',
    UPDATE = 'update',
    LIST = 'list',
    DELETE = 'delete',
}

export const getPageAction = (id?: string): PageAction => {
    if (isCreate(id)) {
        return PageAction.CREATE;
    }

    if (isUpdate(id)) {
        return PageAction.UPDATE;
    }

    return PageAction.LIST;
};
