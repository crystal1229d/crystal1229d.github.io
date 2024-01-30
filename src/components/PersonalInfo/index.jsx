import useDataFetching from '../../hooks/useDataFetching';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { CentralizedWrapper, VerticalListWithDots } from '../../styles/GlobalStyle';
import { ContactsWrapper, GreetingsWrapper, ProfileImageWrapper } from './index.styles';
import { useUnderline } from '../../context/UnderlineContext';

export const PersonalInfo = () => {
    const { wrapWithUnderline } = useUnderline();

    const { currentLanguage } = useLanguage();
    const { t } = useTranslation();
    const personalInfo = useDataFetching('personalInfo');
    
    if (!personalInfo) return;

    const {
        name,
        profileImg, 
        modifiers, 
        email,
        githubUrl, 
        blogUrl, 
        linkedInUrl, 
    } = personalInfo;
    
    return (
        <CentralizedWrapper>
            <div>
                {profileImg  && (
                    <ProfileImageWrapper>
                        <img src={profileImg} alt='profile' />
                    </ProfileImageWrapper>
                )}
                <GreetingsWrapper>
                    <h1>{t('introduction')}</h1>
                    <h1>{currentLanguage === 'en' && t('with-name')}{name}{currentLanguage === 'ko' && t('with-name')}</h1>
                    {modifiers.length > 0 && (
                        <VerticalListWithDots fontSize='1.3rem'>
                            {modifiers.length > 0 && (modifiers.map((modifier, idx) =>
                                <li key={idx}>{wrapWithUnderline(modifier)}</li>
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