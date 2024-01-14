import userData from '../../data/db.json'
import { CentralizedWrapper } from '../common/CentralizedWrapper'
import { MainTitle } from '../common/MainTitle';
import { StyledMainList, HorizontalList, SubTitle, VerticalList } from './index.styles';

export const Skills = () => {
    const { skillSets } = userData;
    
    return (
        <CentralizedWrapper>
            <MainTitle>Skills</MainTitle> 
            {skillSets.map((set, idx) => (
              <StyledMainList key={idx}>
                <SubTitle>{set.category}</SubTitle>
                <HorizontalList>
                  {set.skills
                    .sort((a, b) => b.level - a.level)
                    .map(({ skill, level }, idx) => (
                      <li key={idx} className={level && (level > 3 ? 'expert' : 'beginner')}>
                        <span>{skill}</span>
                        {/* {level && <div className='level'>{level}</div>} */}
                      </li>
                    ))}
                </HorizontalList>
                <VerticalList>
                  {set.detail.length > 0 &&
                    set.detail.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                   ))
                  }
                </VerticalList>
              </StyledMainList>
            ))}
        </CentralizedWrapper>
    )
}