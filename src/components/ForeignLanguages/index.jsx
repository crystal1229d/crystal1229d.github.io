import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CentralizedWrapper, MainTitle } from '../../styles/GlobalStyle';
import { StyledT2, VerticalList } from './index.styles';

export const ForeignLangauges = () => {
    const { currentLanguage } = useLanguage();
    const [foreignLanguages, setForeignLanguages] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await import(`../../data/db.${currentLanguage}.json`);
                setForeignLanguages(data.foreignLanguages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [currentLanguage]);

    if (!foreignLanguages || foreignLanguages.length === 0) return;
    return (
        <CentralizedWrapper>
            <MainTitle>Foreign Language</MainTitle>
            <VerticalList>
                {foreignLanguages.map((lang, idx) => (
                    <li key={idx}>
                        <StyledT2>{lang.language}</StyledT2>
                        <p>{lang.language} - {lang.level}</p>
                    </li>
            ))}
            </VerticalList>
        </CentralizedWrapper>
    )
}