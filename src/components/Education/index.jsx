import userData from '../../data/db.json';
import { CentralizedWrapper } from '../../styles/GlobalStyle';


export const Education = () => {
    const { education } = userData;

    if (!education || education.length === 0) return;
    return (
        <CentralizedWrapper>
            {education.map((edu, idx) => (
                <div key={idx}>{edu.title}</div>       
            ))}
        </CentralizedWrapper>
    )
}