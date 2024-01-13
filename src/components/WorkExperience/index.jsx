import userData from '../../data/db.json'
import { Event } from '../common/Event';
import { MainTitle } from '../common/MainTitle'

export const WorkExperience = () => {
    const { workExperience } = userData;
    return (
        <div>
            <MainTitle>Work Experience</MainTitle>
            <div className='experience-container'>
            {workExperience.map((experience, idx) => (
                <Event key={idx} event={experience} />
            ))}
            </div>
        </div>
    )
}