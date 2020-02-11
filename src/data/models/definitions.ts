export interface IBaseModel<T = any> {
    readonly __innerprops__: T;
    toDb(): any;
}
