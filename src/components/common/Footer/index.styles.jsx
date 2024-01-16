import styled from 'styled-components';

export const StyledFooter = styled.footer`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    & .icon {
        cursor: pointer;
        font-size: 3.0rem;
        animation: bounce 0.6s cubic-bezier(0, 0, 0.18, 0.99) infinite alternate;

        @keyframes bounce{
            to{
                transform: translateY(-30px);
            }
        }
    }

    & .icon:hover, 
    & .icon:active, 
    & .icon:hover ~ .shadow, 
    & .icon:active ~ .shadow {
        animation-play-state: paused;
    }

    & .shadow {
        width: 20px;
        height: 5px;
        background-color: black;
        border-radius: 50%;
        opacity: 0.7;
        
        animation: minimize 0.6s infinite alternate;

        @keyframes minimize{
            to{
                transform: scale(0.7);
            }
        }
    }

`;