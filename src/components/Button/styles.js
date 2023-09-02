import styled from 'styled-components';
export const Container = styled.a`
    border: none;
    background-color: ${ ({ theme }) => theme.COLORS.PURPLE};
    color: ${( {theme }) => theme.COLORS.WHITE};
    padding: 1.2rem 2rem;
    border-radius: .6rem;
`;