import { styled } from "styled-components";
export const Container = styled.a`
    width: 7rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;

    > p {
        font-size: 1.2rem;
        color: ${ ({ theme }) => theme.COLORS.BLACK_100};
        text-transform: uppercase;
    }
`;