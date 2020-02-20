import React from 'react';
import { highlightFirstLetter } from 'helpers/utilities';
import { isString } from 'helpers/check';
import styled from 'styled-components';
import { IStyledBase } from 'helpers/definitions';
import { Panel } from 'components/Panel';
import { MainContent, MainFooter } from 'components/Layout/Main/styled';

export interface IMain extends IStyledBase {
    title: React.ReactNode | string;
    content: React.ReactNode | string;
    footer?: React.ReactNode | string;
    alignTop?: boolean;
    isSmall?: boolean;
}

const MainTitle = styled.div<Pick<IMain, 'isSmall'>>`
    flex: 0 0 60px;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.colorMedium};
    width: ${props => (props.isSmall ? '100' : '80')}%;

    h3 {
        color: ${props => props.theme.colorDark};
        text-transform: uppercase;

        span {
            color: ${props => props.theme.colorMedium};
        }
    }
`;

const Main: React.FunctionComponent<IMain> = ({
    title,
    content,
    footer,
    alignTop = false,
    className,
    isSmall,
}) => {
    return (
        <main className={className}>
            <MainTitle isSmall={isSmall}>
                {isString(title) ? (
                    <h3>{highlightFirstLetter(title as string)}</h3>
                ) : (
                    title
                )}
            </MainTitle>
            <MainContent alignTop={alignTop} isSmall={isSmall}>
                {isString(content) && content !== '' ? (
                    <Panel>
                        <p>{content}</p>
                    </Panel>
                ) : (
                    content
                )}
            </MainContent>
            {footer && (
                <MainFooter>
                    {isString(footer) ? <div>{footer}</div> : footer}
                </MainFooter>
            )}
        </main>
    );
};

export default styled(React.memo(Main))`
    background-color: ${props => props.theme.colorWhite};
    color: ${props => props.theme.colorText};
    flex: 1 1 auto;
    overflow-x: auto;
    font-family: ${props => props.theme.fontFamily2};
    padding: ${props => props.theme.mSize} ${props => props.isSmall && 0};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
