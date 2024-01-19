import useDataFetching from '../../hooks/useDataFetching';
import { CentralizedWrapper, MainTitle } from '../../styles/GlobalStyle';
import { EducationList } from './index.styles';

export const Education = () => {
    const education = useDataFetching('education');

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