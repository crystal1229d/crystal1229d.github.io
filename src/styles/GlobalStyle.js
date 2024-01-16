import { createGlobalStyle, styled } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        overflow-wrap: break-word;
        word-break: keep-all;
    }
`;
export default GlobalStyle;

export const CentralizedWrapper = styled.article`
    width: 60vw;
    margin: 50px auto 250px auto;
    overflow: hidden;

    @media (max-width: 1200px) {
        width: 80vw;
    }
    @media (max-width: 750px) {
        width: 97vw;
    }
`;

export const HorizontalList = styled.ul`
    display: flex;
    margin: 0.4rem 0;
    gap: 0.7rem;
    font-weight: 400;

    li {
        display: flex;
        padding: 3px 8px;
        border-radius: 6px;
    }
`;

export const HorizontalTechStackList = styled(HorizontalList)`
    li {
        height: fit-content; 
        display: flex;
        padding: 3px 8px;
        background-color: ${({ theme }) => theme.colors.codeBg};
        border-radius: 6px;
    }
    & > li.expert {
        font-weight: 600;
    }
    & > li.beginner {
        font-weight: 200;
    }
`

export const VerticalList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0.8rem 0;
    gap: 0.8rem;
    font-size: ${(props) => props.fontSize ? props.fontSize : "1.0rem"};
    line-height: 1.0rem;

    & li {
        display: flex;
        align-items: center;
    }
`;

export const VerticalListWithDots = styled(VerticalList)`
    font-size: ${(props) => props.fontSize ? props.fontSize : "1.0rem"};

    & li:before {
        content: '';
        width: 5px;
        height: 5px;
        display: inline-block;
        margin-right: 0.5rem;
        
        background-color: ${({ theme }) => theme.colors.blue};
        border-radius: 50%;
    }
`;

export const TechStackBadge = styled.span`
    height: fit-content; 
    display: flex;
    padding: 3px 8px;
    background-color: ${({ theme }) => theme.colors.codeBg};
    border-radius: 6px;
`;

export const MainTitle = styled.h1`
    width: fit-content;
    min-height: 3.5rem;
    height: fit-content;
    font-size: ${({ theme }) => theme.fontSizes.mainTitle};
    font-weight: 900;
    letter-spacing: 0.2rem;
    margin-bottom: 2.0rem;
`;

export const SubTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
    font-weight: 900;
    margin-bottom: 0.8rem;
`;

export const MediumParagraph = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 400;
    margin: 0.1rem 0;
`;

export const SmallParagraph = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 300;
    margin: 0.05rem 0;
`;