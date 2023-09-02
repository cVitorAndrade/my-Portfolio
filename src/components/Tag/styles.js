import { styled } from "styled-components";
export const Container = styled.p`
    background-color: ${ ({ theme }) => theme.COLORS.PURPLE};
    color: ${ ({ theme }) => theme.COLORS.WHITE};
    padding: .8rem 1.6rem;
    border-radius: 0% .6rem;
    text-transform: uppercase;
`