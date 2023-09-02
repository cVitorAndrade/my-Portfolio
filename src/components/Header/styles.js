import styled from 'styled-components';
export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: min(90%, 120rem);
    padding: 3rem 0;
    font-weight: 500;
    align-items: center;

    > div {
        display: flex;
        gap: 3rem;
        align-items: center;
    }
`;