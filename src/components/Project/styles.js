import { styled } from "styled-components";
export const Container = styled.div`
    max-width: 50rem;
    flex: 1;

    > img {
        border-radius: 6px;
        width: 100%;
        height: 300px;
    }

    > div {
        padding: 0 1.7rem;
        text-align: left;
    }

    > div div {
        display: flex;
        gap: 1.2rem;
        flex-wrap: wrap;
    }

    > div h3 {
        margin: 1.6rem 0 1.2rem;
        font-weight: 500;
        font-size: 2rem;
        color: ${ ({ theme }) => theme.COLORS.BLACK_300};
        text-transform: uppercase;
        text-align: start;
    }

    > div > p {
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: ${ ({ theme }) => theme.COLORS.BLACK_100};
        margin: 1.6rem 0 1.8rem;
        text-align: justify;
    }

    a + a {
        margin: 2rem 0 4rem;
    }

`; 

export const Link = styled.a`
    color: ${ ({ theme }) => theme.COLORS.PURPLE};
    text-decoration: underline;
    display: block;
    

`;