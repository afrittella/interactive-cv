import { ISkillModel } from 'data/models/skill/definitions';
import { ISkillEntity } from 'data/entities/skill/definitions';

export class SkillModel implements ISkillModel {
    private readonly props: ISkillEntity;

    constructor(props: ISkillEntity) {
        this.props = props;
    }

    get __innerprops__() {
        return this.props;
    }

    get label() {
        return this.props.label;
    }

    get type() {
        return this.props.type;
    }

    get level() {
        return this.props.level;
    }

    get years() {
        return this.props.years;
    }

    get formula() {
        return (this.props.years + this.props.level) / 2;
    }

    toDb(): ISkillEntity {
        return {
            label: this.props.label,
            type: this.props.type,
            level: this.props.level,
            years: this.props.years,
        };
    }
}
