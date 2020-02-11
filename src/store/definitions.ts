import { ICVState } from 'store/state/cv/definitions';
import { IApplicationState } from 'store/state/application/definitions';

export interface IRootState {
    cv: ICVState;
    application: IApplicationState;
}
