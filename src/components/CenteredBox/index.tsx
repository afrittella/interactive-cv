import React from 'react';
import { IStyledBase } from 'helpers/definitions';
import styled from 'styled-components';

const CenteredBox: React.FunctionComponent<IStyledBase> = ({
    className,
    children,
}) => {
    return (
        <div className={className}>
            <div className={`${className}__box`}>{children}</div>
        </div>
    );
};

export default styled(CenteredBox)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colorDark};
    color: ${props => props.theme.colorMedium};

    &__box {
        text-align: center;
        max-width: 80vw;
        padding: ${props => props.theme.sSize} ${props => props.theme.mSize};

        h3 {
            text-transform: uppercase;
        }
    }
`;
