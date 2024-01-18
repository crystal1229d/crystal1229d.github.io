import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
    width: 60vw;
    height: 70px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    overflow: hidden;

    @media (max-width: 1200px) {
        width: 80vw;
    }
    @media (max-width: 750px) {
        width: 97vw;
    }
`;

export const LanguageSelector = styled.select`
    width: fit-content;
    height: 30px;
    font-size: 0.8rem;
    text-align: center;
    -webkit-appearance: none;
    outline: none;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid gray;
    overflow: hidden;
    cursor: pointer;

    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.fontColor};
`;
       
export const ToggleButton = styled.button`
    width: 50px;
    height: 50px;
    outline: none;
    border: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.toggleBg};
    cursor: pointer;

    &:before {
        content: '';
        width: 32px;
        height: 32px;
        display: inline-block;
        position: relative;
        top: -6px;
        right: -10px;
        z-index: 5;
        border-radius: 50%;
        background: ${({ darkMode }) => darkMode === 'dark' ? '#1F2122' : 'white'};
        transform: ${({ darkMode }) => darkMode === 'dark' ? '' : 'scale(0)'};
        transform-origin: top right;
        transition: transform .6s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`;