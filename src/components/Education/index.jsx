import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CentralizedWrapper, MainTitle } from '../../styles/GlobalStyle';
import { EducationList } from './index.styles';


export const Education = () => {
    const { currentLanguage } = useLanguage();
    const [education, setEducation] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await import(`../../data/db.${currentLanguage}.json`);
                setEducation(data.education);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [currentLanguage]);

    if (!education || education.length === 0) return;
    return (
        <CentralizedWrapper>
            <MainTitle>Education</MainTitle>
            <EducationList>
                {education.map((edu, idx) => (
                    <li key={idx}>
                        <h2>{edu.title}</h2>
                        <p>{edu.term}</p>
                        <p>{edu.description}</p>
                    </li>  
                ))}
            </EducationList>
        </CentralizedWrapper>
    )
}