import styled from 'styled-components';

export const StyledWrapper = styled.article`
    width: 50vw;
    margin: 50px auto 250px auto;

    overflow: hidden;
    overflow-wrap: break-word;
    word-break: keep-all;

    @media (max-width: 1400px) {
        width: 80vw;
    }
    @media (max-width: 1200px) {
        width: 90vw;
    }
    @media (max-width: 750px) {
        width: 97vw;
    }
`;