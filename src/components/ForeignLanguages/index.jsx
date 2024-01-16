import userData from '../../data/db.json';
import { CentralizedWrapper, MainTitle } from '../../styles/GlobalStyle';

import { StyledT2, VerticalList } from './index.styles';

export const ForeignLangauges = () => {
    const { foreignLanguages } = userData;

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