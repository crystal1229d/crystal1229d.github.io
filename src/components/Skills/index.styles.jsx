import styled from 'styled-components';

export const SubTitle = styled.h3`
    font-size: 1.7rem;
    font-weight: 600;
`;

export const StyledMainList = styled.div`
    margin: 0.5rem 0 2.0rem 0;
`;

export const HorizontalList = styled.ul`
    display: flex;
    margin: 0.4rem 0;
    gap: 1.0rem;
    font-weight: 400;

    li {
        display: flex;
        padding: 3px 8px;
        background-color: #f7f2ec;
        border-radius: 6px;
    }

    & > li.expert {
        font-weight: 600;
    }
    & > li.beginner {
        font-weight: 200;
    }
`;

export const VerticalList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0.8rem 0;
    gap: 0.5rem;
    font-size: 0.9rem;
    line-height: 1.0rem;
    opacity: 0.7;

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