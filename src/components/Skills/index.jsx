import userData from '../../data/db.json'
import { CentralizedWrapper } from '../common/CentralizedWrapper'
import { MainTitle } from '../common/MainTitle';

export const Skills = () => {
    const { skillSets } = userData;
    
    return (
        <CentralizedWrapper>
            <MainTitle>Skills</MainTitle> 
            {skillSets.map((set, index) => (
              <div key={index}>
                <div>{set.category}</div>
                <div>
                  {set.skills
                    .sort((a, b) => b.level - a.level)
                    .map(({ skill, level }, index) => (
                      <div key={index}>
                        <span>{skill}</span>
                        {level && <span className={`level ${level > 3 && 'expert'}`}>{level}</span>}
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </CentralizedWrapper>
    )
}