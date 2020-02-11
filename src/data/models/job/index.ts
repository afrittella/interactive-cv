import { IJobModel } from 'data/models/job/definitions';
import { IJobEntity, PRESENT_JOB } from 'data/entities/job/definitions';
import moment from 'moment';

const formatDate = (date: string): string => {
    if (date === '' || date === PRESENT_JOB || date > '2050-01') {
        return PRESENT_JOB;
    }

    if (date.length > 4) {
        return moment(date, moment.HTML5_FMT.MONTH).format('MM/YYYY');
    }

    return date;
};

export class JobModel implements IJobModel {
    private readonly props: IJobEntity;

    constructor(props: IJobEntity) {
        this.props = props;
    }

    get __innerprops__() {
        return this.props;
    }

    get company() {
        return this.props.company;
    }

    get from() {
        return this.props.from;
    }

    get to() {
        return this.props.to;
    }

    get formattedFrom() {
        return formatDate(this.props.from);
    }

    get formattedTo() {
        return formatDate(this.props.to);
    }

    get title() {
        return this.props.title;
    }

    get description() {
        return this.props.description;
    }

    get category() {
        return this.props.category;
    }

    get type() {
        return this.props.type;
    }

    get country() {
        return this.props.country;
    }

    toDb(): IJobEntity {
        return {
            company: this.props.company,
            from: this.props.from,
            to: this.props.to,
            title: this.props.title,
            description: this.props.description,
            category: this.props.category,
            type: this.props.type,
            country: this.props.country,
        };
    }
}
