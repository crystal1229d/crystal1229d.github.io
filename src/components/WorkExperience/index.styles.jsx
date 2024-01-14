import styled from 'styled-components';

export const WorkWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 100%;
    margin-top: 1.0rem;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`;

export const LeftPane = styled.div`
    font-size: 0.9rem;
    font-weight: 400;
`;

export const RightPane = styled.div`

`;

export const ProjectItem = styled.div`
    margin-bottom: 2.0rem;
    padding-left: 0.5rem;
    font-size: 0.8rem;
    font-weight: 400;
    border-left: 1px solid #3a7bd5;
`;

export const HorizontalList = styled.ul`
    display: flex;
    gap: 8px;
`;

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

export const StyledT1 = styled.h1`
    font-size: 2.2rem;
    font-weight: 900;
    margin-bottom: 0.8rem;
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

export const SmallP = styled.p`
    font-size: 0.85rem;
    font-weight: 400;
    margin: 0.05rem 0;
`;