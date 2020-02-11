export interface ISkillEntity {
    label: string;
    type: string;
    level: number;
    years: number;
}

interface ISkillExperience {
    label: string;
    min: number;
    max: number;
    getLabel(): string;
    includes(value: number): boolean;
}

class SkillExperience implements ISkillExperience {
    constructor(
        readonly label: string,
        readonly min: number,
        readonly max: number,
    ) {}

    getLabel() {
        return this.label;
    }

    includes(value: number): boolean {
        return value > this.min && value <= this.max;
    }
}

const SkillExperiences = [
    new SkillExperience('< 1 year', 0, 1),
    new SkillExperience('< 3 years', 1, 3),
    new SkillExperience('< 5 years', 3, 5),
    new SkillExperience('< 10 years', 5, 10),
    new SkillExperience('+ 10 years', 10, 99),
];

export const getSkillExperience = (years: number): string => {
    const selectedExperience = SkillExperiences.filter(experience =>
        experience.includes(years),
    );

    return selectedExperience ? selectedExperience[0].getLabel() : '';
};
