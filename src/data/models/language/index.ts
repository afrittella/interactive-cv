import { ILanguageModel } from 'data/models/language/definitions';
import { ILanguageEntity } from 'data/entities/language/definitions';

export class LanguageModel implements ILanguageModel {
    private readonly props: ILanguageEntity;

    constructor(props: ILanguageEntity) {
        this.props = props;
    }

    get __innerprops__() {
        return this.props;
    }

    get name() {
        return this.props.name;
    }

    get level() {
        return this.props.level;
    }

    get isMain() {
        return this.props.isMain;
    }

    toDb(): ILanguageEntity {
        return {
            name: this.props.name,
            level: this.props.level,
            isMain: this.props.isMain,
        };
    }
}
