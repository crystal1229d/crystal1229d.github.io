import styled from 'styled-components';


export const ProfileWrapper = styled.div`

`;

export const ProfileImageWrapper = styled.div`
    width: 90px;
    height: 90px;
    
    border-radius: 50%;

    & > img {
        width: 100%;
        height: 100%;
    }
`;

export const GreetingsWrapper = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.3rem;
    letter-spacing: 0.1rem;

    & > p {
        margin-top: 0.7rem;
        opacity: 0.7;
    }

    & > h1 { 	
        font-size: 4.0rem;
        line-height: 4.5rem;
        font-weight: 900;
    } 

    @media (max-width: 500px) {
        & > h1 { 	
            font-size: 3.2rem;
            line-height: 3.5rem;
            font-weight: 900;
            letter-spacing: 0.08rem;
        } 
    }
`;

export const ContactsWrapper = styled.ul`
    display: flex;
    margin-top: 2.0rem;
    flex-direction: column;
    gap: 0.7rem;
    
    font-weight: 0.9rem;
    letter-spacing: 0.01rem;

    li > span {
        font-weight: 600;
        display: inline-block;
        width: 150px;
        letter-spacing: 0.1rem;
    }

`;