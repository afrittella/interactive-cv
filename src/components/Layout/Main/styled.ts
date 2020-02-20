import styled from 'styled-components';
import { IMain } from 'components/Layout/Main/index';

export const MainContent = styled.div<Pick<IMain, 'alignTop' | 'isSmall'>>`
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: ${props =>
    props.alignTop || props.isSmall ? 'flex-start' : 'center'};
    margin-top: ${props => (props.alignTop ? props.theme.mSize : 0)};

    .panel {
        p {
            font-size: ${props => props.theme.fontSizeMedium};
        }
    }
`;

export const MainFooter = styled.div`
    flex: 0 0 60px;
    border-top: 1px solid ${props => props.theme.colorMedium};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`;