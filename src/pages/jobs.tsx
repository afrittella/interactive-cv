import React from 'react';
import { useSelector } from 'react-redux';
import { selectJobs } from 'store/state/cv/selectors';
import Main from 'components/Layout/Main';
import { IJobModel } from 'data/models/job/definitions';
import { IItemConfiguration, ItemType } from 'components/Timeline/definitions';
import Timeline from 'components/Timeline';
import { selectIsSmall } from 'store/state/application/selectors';

const JobsPage: React.FunctionComponent = () => {
    const jobs = useSelector(selectJobs);
    const isSmall = useSelector(selectIsSmall);

    const getItemType = (category: string) => {
        if (category === 'education') {
            return ItemType.EDUCATION;
        }

        if (category === 'music') {
            return ItemType.MUSIC;
        }

        return ItemType.WORK;
    };

    const getTimelineItemConfig = (job: IJobModel): IItemConfiguration => {
        return {
            type: getItemType(job.category),
            headline: {
                date: `${job.formattedFrom} - ${job.formattedTo}`,
                extra:
                    job.title + (job.type === 'contract' ? ' (contract)' : ''),
            },
            subtitle: `${job.company} - ${job.country}`,
            text: job.description,
        };
    };

    const getTimeline = (jobs: IJobModel[]): React.ReactNode => {
        const items = jobs.map(job => getTimelineItemConfig(job));

        items.push({
            type: ItemType.BABY,
            headline: {
                date: '05/1977',
            },
            text: 'I was born',
        });

        return <Timeline itemsConfiguration={items} isSmall={isSmall} />;
    };

    return (
        <Main
            isSmall={isSmall}
            title="Experience"
            content={jobs && getTimeline(jobs)}
            alignTop={true}
        />
    );
};

export default JobsPage;
