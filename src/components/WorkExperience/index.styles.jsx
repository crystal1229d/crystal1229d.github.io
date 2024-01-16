import styled from 'styled-components';

export const WorkWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 28% 70%;
    grid-template-rows: 100%;
    gap: 2%;
    margin-top: 1.0rem;

    @media (max-width: 1400px) {
        grid-template-columns: 33% 66%;
        grid-template-rows: 100%;
        gap: 1%;
    }
    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    & > div:nth-child(1) {
        font-size: 0.9rem;
        font-weight: 400;
    }
`;

export const ProjectItem = styled.div`
    margin-bottom: 2.0rem;
    padding-left: 0.7rem;
    font-size: 0.8rem;
    font-weight: 400;
    border-left: 1px solid #3a7bd5;
`;

export const StyledT2 = styled.h2`
    font-size: 1.90rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
`;

export const StyledT3 = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    margin: 1.2rem 0 0.5rem 0;
`;