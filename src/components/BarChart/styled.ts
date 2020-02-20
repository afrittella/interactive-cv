import styled from 'styled-components';

export const Entry = styled.div`    
    width: 100%;
    margin: ${props => props.theme.xsSize} 0;
    line-height: 0.4rem;
`;

export const Label = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    line-height: ${props => props.theme.mSize};
    margin-bottom: ${props => props.theme.xxsSize};

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

export const Bar = styled.div`
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