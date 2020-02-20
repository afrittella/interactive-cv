import React from 'react';
import { generateGuid } from 'helpers/generators';
import styled from 'styled-components';
import { IStyledBase } from 'helpers/definitions';
import { Bar, Entry, Label } from 'components/BarChart/styled';

interface IBarChartItem {
    label: string;
    percentage?: number;
    extra?: string;
}

const BarChartItem: React.FunctionComponent<IBarChartItem> = ({
    label,
    percentage,
    extra,
}) => {
    return (
        <Entry>
            <Label>
                <div>{label}</div>
                {extra && <span>{extra}</span>}
            </Label>
            {percentage !== undefined && (
                <Bar>
                    <span style={{ width: `${percentage}%` }} />
                </Bar>
            )}
        </Entry>
    );
};

export interface IBarChart extends IStyledBase {
    entries: IBarChartItem[];
}

const BarChart: React.FunctionComponent<IBarChart> = ({
    entries,
    className,
}) => {
    return (
        <div className={className}>
            {entries.map((entry, index) => (
                <BarChartItem
                    label={entry.label}
                    percentage={entry.percentage}
                    extra={entry.extra}
                    key={generateGuid(`bar_${index}`)}
                />
            ))}
        </div>
    );
};

export default styled(React.memo(BarChart))`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-family: 'Roboto', monospace;
    width: 100%;
`;
