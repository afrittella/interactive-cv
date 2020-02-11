import React from 'react';
import { useSelector } from 'react-redux';
import { selectGroupedSkills, selectLanguages } from 'store/state/cv/selectors';
import Main from 'components/Layout/Main';
import BarChart from 'components/BarChart';
import { ISkillModel } from 'data/models/skill/definitions';
import { ILanguageModel } from 'data/models/language/definitions';
import { IDictionary } from 'helpers/definitions';
import { getSkillExperience } from 'data/entities/skill/definitions';
import { selectIsSmall } from 'store/state/application/selectors';
import { ShadowFullWidthPanel } from 'components/Panel';
import Panels from 'components/Panels';

const SkillsPage: React.FunctionComponent = () => {
    const languages = useSelector(selectLanguages);
    const groupedSkills = useSelector(selectGroupedSkills);
    const isSmall = useSelector(selectIsSmall);

    const getSkillsConfiguration = (skills: ISkillModel[]) => {
        const maxFormula = skills[0].formula;

        return skills.map(skill => ({
            label: skill.label,
            percentage: Math.round((skill.formula * 100) / maxFormula),
            extra: getSkillExperience(skill.years),
        }));
    };

    const getSkillsCharts = (
        skills: IDictionary<ISkillModel[]>,
    ): React.ReactNodeArray => {
        let chartPanel: React.ReactNodeArray = [];
        for (let key in skills) {
            if (skills.hasOwnProperty(key)) {
                chartPanel.push(
                    <ShadowFullWidthPanel
                        key={`panel_${key}`}
                        isSmall={isSmall}
                    >
                        <h5>{key}</h5>
                        <BarChart
                            entries={getSkillsConfiguration(skills[key])}
                        />
                    </ShadowFullWidthPanel>,
                );
            }
        }

        return chartPanel;
    };

    const getLanguagesConfiguration = (languages: ILanguageModel[]) => {
        return languages.map(language => ({
            label: language.name,
        }));
    };

    const getSkills = (): React.ReactNode => {
        return (
            <Panels isSmall={isSmall}>
                {languages && (
                    <ShadowFullWidthPanel isSmall={isSmall}>
                        <h5>Spoken languages</h5>
                        <BarChart
                            entries={getLanguagesConfiguration(languages)}
                        />
                    </ShadowFullWidthPanel>
                )}
                {groupedSkills && getSkillsCharts(groupedSkills)}
            </Panels>
        );
    };

    return (
        <Main
            isSmall={isSmall}
            title="Skills"
            content={getSkills()}
            alignTop={true}
        />
    );
};

export default SkillsPage;
