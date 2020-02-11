import styled from 'styled-components';

const Panels = styled.div<{ isSmall?: boolean }>`
    display: grid;
    grid-template-columns: ${props => (props.isSmall ? '1fr' : '1fr 1fr')};
    grid-column-gap: ${props => (props.isSmall ? '0' : props.theme.mSize)};
    grid-row-gap: ${props => props.theme.mSize};
    width: ${props => (props.isSmall ? '95' : '80')}%;
    margin: ${props => props.theme.mSize} 0;
    padding-bottom: ${props => props.theme.mSize};
`;

export default Panels;
