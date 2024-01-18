import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CentralizedWrapper, HorizontalTechStackList, MainTitle, SmallParagraph, SubTitle, VerticalListWithDots } from '../../styles/GlobalStyle';
import { ProjectItem, StyledT2, StyledT3, WorkWrapper } from './index.styles';

export const WorkExperience = () => {
    const { currentLanguage } = useLanguage();
    const [workExperience, setWorkExperience] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await import(`../../data/db.${currentLanguage}.json`);
                setWorkExperience(data.workExperience);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [currentLanguage]);

    if (!workExperience || workExperience.length === 0) return;
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
                                                <li key={s_idx}>{stack}</li>
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