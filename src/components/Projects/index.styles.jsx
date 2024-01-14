import styled from 'styled-components';

export const VerticalList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0.8rem 0;
    gap: 0.5rem;

    & li {
        display: flex;
        align-items: center;
    }
    & li:before {
        content: '';
        width: 5px;
        height: 5px;
        display: inline-block;
        margin-right: 0.5rem;
        
        background-color: #3a7bd5;
        border-radius: 50%;
    }
`;

export const HorizontalList = styled.ul`
    display: flex;
    gap: 8px;
`;

export const ProjectItem = styled.li`
    width: 100%;
    display: grid;
    grid-template-columns: 30% 68%;
    grid-template-rows: 100%;
    grid-column-gap: 2%;
    margin-top: 1.0rem;
    font-size: 0.9rem;

    @media (max-width: 1000px) {
        display: grid;
        grid-template-columns: 30% 68%;
        grid-template-rows: 100%;
        grid-column-gap: 2%;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        gap: 2.0rem;
    }
`;

export const ProfileImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
        width: 100%;
        max-width: 300px;
        height: fit-content;
        border-radius: 50%;
    }
`;

export const LinkWrapper = styled.div`
        font-size: 1.2rem;
        font-weight: 700;

        a {
            color: inherit;
        }
`;

export const StyledT1 = styled.h1`
    font-size: 2.2rem;
    font-weight: 900;
    margin-bottom: 0.3rem;
`;

export const StyledT3 = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    margin: 1.2rem 0 0.5rem 0;
`;

export const SmallP = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0.2rem 0;
`;