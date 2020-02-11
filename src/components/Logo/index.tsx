import React from 'react';
import { IStyledBase } from 'helpers/definitions';
import styled from 'styled-components';

interface ILogoProps extends IStyledBase {
    firstPart: string;
    secondPart?: string;
    headline?: string;
}

const Headline = styled.div`
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.colorMidLight};
    font-size: ${props => props.theme.fontSizeSmall};
`;

const Logo: React.FunctionComponent<ILogoProps> = ({
    firstPart,
    secondPart,
    headline,
    className,
}) => {
    return (
        <>
            <div className={className}>
                <div className={`${className}__first-part`}>{firstPart}</div>
                <div className={`${className}__second-part`}>
                    {secondPart && secondPart}
                </div>
            </div>
            {headline && <Headline>{headline}</Headline>}
        </>
    );
};

export default styled(React.memo(Logo))`
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    font-size: ${props => props.theme.fontSizeH3};

    &__first-part {
        color: ${props => props.theme.colorMedium};
    }

    &__second-part {
        color: ${props => props.theme.colorLight};
    }
`;
