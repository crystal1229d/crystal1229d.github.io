import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid black;
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