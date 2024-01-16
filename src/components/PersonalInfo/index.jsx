import { CentralizedWrapper, VerticalListWithDots } from '../../styles/GlobalStyle';
import userData from '../../data/db.json'
import { ContactsWrapper, GreetingsWrapper, ProfileImageWrapper } from './index.styles';

export const PersonalInfo = () => {
    const {
        personalInfo: {
            name,
            profileImg, 
            modifiers, 
            email,
            githubUrl, 
            blogUrl, 
            linkedInUrl, 
        },
    } = userData;
    
    return (
        <CentralizedWrapper>
            <div>
                {profileImg  && (
                    <ProfileImageWrapper>
                        <img src={profileImg} alt='profile' />
                    </ProfileImageWrapper>
                )}
                <GreetingsWrapper>
                    <h1>안녕하세요,</h1>
                    <h1>{name}입니다</h1>
                    {modifiers.length > 0 && (
                        <VerticalListWithDots fontSize='1.3rem'>
                            {modifiers.length > 0 && (modifiers.map((modifier, idx) =>
                                <li key={idx}>{modifier}</li>
                            ))}
                        </VerticalListWithDots>
                    )}
                </GreetingsWrapper>
            </div>
            <ContactsWrapper>
                {email && <li><span>Email</span> {email}</li>}
                {githubUrl && <li><span>Github</span> {<a href={githubUrl}>{githubUrl}</a>}</li>}
                {blogUrl && <li><span>Blog</span> {<a href={blogUrl}>{blogUrl}</a>}</li>}
                {linkedInUrl && <li><span>LinkedIn</span> {<a href={linkedInUrl}>{linkedInUrl}</a>}</li>}
            </ContactsWrapper>
        </CentralizedWrapper>
    )
}