import styled from 'styled-components';

export const ProjectItem = styled.li`
    width: 100%;
    padding-left: 0.7rem;
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 1.0rem;
    margin-bottom: 2.0rem;
    font-size: 0.9rem;
    border-left: 1px solid #3a7bd5;

    & > div {
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
        flex-shrink: 0;
    }

    & > img {
        position: relative;
        top: 0;
        right: 59%;
        width: 360px;
        height:360px;
        z-index: -5;
        opacity: 0.7;
        border-radius: 12%;
    }

    & > img:hover, 
    & > img:active {
        opacity: 1.0;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;

        & > img {
            position: relative;
            top: 0;
            right: 0;
            opacity: 1.0;
        }
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
    }
`;

export const LinkWrapper = styled.div`
    font-size: 1.2rem;
    font-weight: 700;

    a {
        color: inherit;
    }
`;

export const StyledT3 = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    margin: 1.2rem 0 0.5rem 0;
`;