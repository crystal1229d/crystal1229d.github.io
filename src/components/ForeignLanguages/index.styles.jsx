import styled from 'styled-components';

export const VerticalList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0.8rem 0;
    gap: 0.8rem;
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

export const StyledT2 = styled.h2`
    font-size: 1.90rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
`;
