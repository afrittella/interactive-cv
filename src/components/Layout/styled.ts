import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: ${props => props.theme.sSize} 0;
`;