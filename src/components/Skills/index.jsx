import { CentralizedWrapper, MainTitle, HorizontalTechStackList, VerticalListWithDots } from '../../styles/GlobalStyle';
import userData from '../../data/db.json'
import { StyledMainList, SubTitle } from './index.styles';

export const Skills = () => {
    const { skillSets } = userData;
    
    return (
        <CentralizedWrapper>
            <MainTitle>Skills</MainTitle> 
            {skillSets.map((set, idx) => (
              <StyledMainList key={idx}>
                <SubTitle>{set.category}</SubTitle>
                <HorizontalTechStackList>
                  {set.skills
                    .sort((a, b) => b.level - a.level)
                    .map(({ skill, level }, idx) => (
                      <li key={idx} className={level && (level > 3 ? 'expert' : 'beginner')}>
                        <span>{skill}</span>
                        {/* {level && <div className='level'>{level}</div>} */}
                      </li>
                    ))}
                </HorizontalTechStackList>
                <VerticalListWithDots>
                  {set.detail.length > 0 &&
                    set.detail.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                   ))
                  }
                </VerticalListWithDots>
              </StyledMainList>
            ))}
        </CentralizedWrapper>
    )
}