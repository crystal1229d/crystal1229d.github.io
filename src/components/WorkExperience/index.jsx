import userData from '../../data/db.json'
import { CentralizedWrapper } from '../common/CentralizedWrapper';
import { MainTitle } from '../common/MainTitle'
import { TechStackBadge } from '../common/TechStackBadge';
import { HorizontalList, LeftPane, ProjectItem, RightPane, SmallP, StyledT1, StyledT2, StyledT3, VerticalList, WorkWrapper } from './index.styles';

export const WorkExperience = () => {
    const { workExperience } = userData;

    return (
        <CentralizedWrapper>
            <MainTitle>Work Experience</MainTitle>
            {workExperience.map((work, idx) => (
                <WorkWrapper key={idx}>
                    <LeftPane>
                        <StyledT1>{work.name}</StyledT1>
                        <SmallP>{work.position}</SmallP>
                        <SmallP>{work.term}</SmallP>
                        {work.description && <p>{work.description}</p>}
                        {work.url && (<p>{work.url}</p>)}
                    </LeftPane>
                    <RightPane>
                        {work.projects.length > 0 && (
                            work.projects.map((project, p_idx) => (
                                <ProjectItem key={p_idx}>
                                    <StyledT2>{project.name}</StyledT2>
                                    <SmallP>{project.position}</SmallP>
                                    <SmallP>{project.term}</SmallP>
                                    <StyledT3>Description</StyledT3>
                                    <p>{project.description}</p>
                                    <StyledT3>What Did I do</StyledT3>
                                    <VerticalList>
                                        {project.tasks.map((task, t_idx) => (
                                            <li key={t_idx}>{task}</li>
                                        ))}
                                    </VerticalList>
                                    <StyledT3>Tech Stacks</StyledT3>
                                    <HorizontalList>
                                        {project.techStacks.length > 0 && 
                                            project.techStacks.map((stack, s_idx) => (
                                                <li><TechStackBadge key={s_idx}>{stack}</TechStackBadge></li>
                                        ))}
                                    </HorizontalList>
                                </ProjectItem>
                            )
                        ))}
                    </RightPane>
                </WorkWrapper>
            ))}
        </CentralizedWrapper>
    )
}