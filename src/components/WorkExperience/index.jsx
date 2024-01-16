import userData from '../../data/db.json'
import { CentralizedWrapper, HorizontalTechStackList, MainTitle, SmallParagraph, SubTitle, TechStackBadge, VerticalListWithDots } from '../../styles/GlobalStyle';
import { LeftPane, ProjectItem, StyledT2, StyledT3, WorkWrapper } from './index.styles';

export const WorkExperience = () => {
    const { workExperience } = userData;

    return (
        <CentralizedWrapper>
            <MainTitle>Work Experience</MainTitle>
            {workExperience.map((work, idx) => (
                <WorkWrapper key={idx}>
                    <div>
                        <SubTitle>{work.name}</SubTitle>
                        <SmallParagraph>{work.position}</SmallParagraph>
                        <SmallParagraph>{work.term}</SmallParagraph>
                        {work.description && <p>{work.description}</p>}
                        {work.url && (<SmallParagraph>{work.url}</SmallParagraph>)}
                    </div>
                    <div>
                        {work.projects.length > 0 && (
                            work.projects.map((project, p_idx) => (
                                <ProjectItem key={p_idx}>
                                    <StyledT2>{project.name}</StyledT2>
                                    <SmallParagraph>{project.position}</SmallParagraph>
                                    <SmallParagraph>{project.term}</SmallParagraph>
                                    <StyledT3>Description</StyledT3>
                                    <p>{project.description}</p>
                                    <StyledT3>What Did I do</StyledT3>
                                    <VerticalListWithDots fontSize='0.9rem'>
                                        {project.tasks.map((task, t_idx) => (
                                            <li key={t_idx}>{task}</li>
                                        ))}
                                    </VerticalListWithDots>
                                    <StyledT3>Tech Stacks</StyledT3>
                                    <HorizontalTechStackList>
                                        {project.techStacks.length > 0 && 
                                            project.techStacks.map((stack, s_idx) => (
                                                <li><TechStackBadge key={s_idx}>{stack}</TechStackBadge></li>
                                        ))}
                                    </HorizontalTechStackList>
                                </ProjectItem>
                            )
                        ))}
                    </div>
                </WorkWrapper>
            ))}
        </CentralizedWrapper>
    )
}