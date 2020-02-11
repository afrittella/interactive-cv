import React from 'react';
import { generateGuid } from 'helpers/generators';
import styled from 'styled-components';
import { IStyledBase } from 'helpers/definitions';

interface IBarChartItem {
    label: string;
    percentage?: number;
    extra?: string;
}

const Entry = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    margin: ${props => props.theme.xsSize} 0;
    line-height: 0.4rem;
`;

const Label = styled.div`
    width: 100%;
    line-height: ${props => props.theme.mSize};
    margin-bottom: ${props => props.theme.xxsSize};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
        flex: 0 0 auto;
    }

    span {
        flex: 0 1 auto;
        align-self: flex-end;
        font-size: ${props => props.theme.fontSizeSmall};
        color: ${props => props.theme.colorMidDark};
    }
`;

const Bar = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colorLight};
    span {
        &:before {
            content: ' ';
        }
        display: block;
        background-color: ${props => props.theme.colorMidDark};
    }
`;

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

export default styled(BarChart)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-family: 'Roboto', monospace;
    width: 100%;
`;
