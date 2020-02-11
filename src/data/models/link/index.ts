import { ILinksModel } from 'data/models/link/definitions';
import { ILinksEntity } from 'data/entities/link/definitions';

export class LinksModel implements ILinksModel {
    private readonly props: ILinksEntity;

    constructor(props: ILinksEntity) {
        this.props = props;
    }

    get __innerprops__() {
        return this.props;
    }

    get links() {
        return this.props;
    }

    getLink(key: string): string {
        return this.props[key];
    }

    toDb(): ILinksEntity {
        return this.props;
    }
}
