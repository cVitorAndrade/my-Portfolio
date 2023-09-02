import styled from 'styled-components';
export const Container = styled.section`
    width: min(90%, 120rem);
    margin: auto;

    > h2 {
        margin: 7rem 0 3rem;
    }

    > div {
        text-align: center;
    }

    > div button {
        border: none;
        text-transform: uppercase;
        padding: 1.8rem 0;
        border-radius: 0 .6rem;
        width: 80%;
        margin-top: 1.8rem;
    }
    
    > div > a {
        background-color: ${ ({ theme }) => theme.COLORS.PURPLE};
        padding: 1.8rem 0;
        width: 80%;
        margin: 2rem auto 10rem;
        border-radius: 0 .6rem;

        display: block;

        font-size: 1.6rem;
        font-weight: 500;
        color: ${ ({ theme }) => theme.COLORS.WHITE};
        text-transform: uppercase;    
    }
`;
