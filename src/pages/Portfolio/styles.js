import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    padding-bottom: 12rem;

    .my-swiper-slide-container {
        display: flex;
        justify-content: center;
        margin-bottom: 3rem;
    }

    .skills-container {
       width: min(90%, 120rem);
       margin: auto;
       display: flex;
       flex-direction: column;
    }

    .skills-container h2 {
        align-self: flex-start;
    }

    .skills-container > div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5rem;
        margin-top: 5rem;
    }

    .projects-container {
        width: min(90%, 120rem);
        margin: auto;
    }

    .projects-container > h2 {
        margin: 7rem 0 3rem;
    }

    .projects-container > div {
        text-align: center;
    }

    .projects-container > div button {
        border: none;
        text-transform: uppercase;
        padding: 1.8rem 0;
        border-radius: 0 .6rem;
        width: 80%;
        margin-top: 1.8rem;
    }
    
    .projects-container > div a {
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

    footer {
        width: min(90%, 120rem);
        margin: 10rem auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    footer div {
        display: flex;
        gap: 7rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    footer > p {
        font-weight: 500;
        margin-top: 5rem;
    }

    footer p a {
        font-weight: 600;
        text-decoration: underline;
        color: ${ ({ theme }) => theme.COLORS.PURPLE};
    }
`;

export const AboutMe = styled.div`
    margin: auto;
    width: min(90%, 120rem);

    h2 {
        margin: 7rem 0 2rem;
    }

    > div {
        position: relative;
    }

    > div span {
        padding: 2.5px;
        height: 100px;
        background-color: ${ ({ theme }) => theme.COLORS.PURPLE};
        position: absolute;
        border-radius: 0 .6rem;
        left: -10px;
    }

    p {
        color: ${ ({ theme }) => theme.COLORS.BLACK_100};
        font-size: 1.8rem;
        line-height: 2.8rem;
        text-align: justify;
    }
`;

export const Profile = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: min(90%, 120rem);
    margin: auto;

    div {
        flex: 1;
    }
    
    > img {
        flex: 1;
    }

    > div p:first-child {
        color: ${ ({ theme }) => theme.COLORS.BLACK_300};
        font-family: 'Tinos', serif;
        margin: 6rem 0 1.2rem;
        text-transform: uppercase;
        font-size: 1.6rem;
    }

    > div h1 {
        font-weight: 500;
        font-size: 4rem;
        color: ${ ({ theme }) => theme.COLORS.PURPLE};
    }

    > div h1 + p {
        margin: 1.6rem 0;
        line-height: 2.4rem;
        color: ${ ({ theme }) => theme.COLORS.BLACK_100};
    }

    @media (min-width: 738px) {
        & {
            flex-direction: row-reverse;
            align-items: center;
        }

        > img {
            width: 50%;
        }

        > div {
            text-align: justify;
        }

        > div h1 {
           font-size: 7rem;
        }

        > div h1 + p {
            margin-bottom: 3rem;
            font-size: 1.8rem;
        }

    }
`;