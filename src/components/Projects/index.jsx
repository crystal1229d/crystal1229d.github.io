import userData from '../../data/db.json';
import noImage from '../../assets/images/noImage.png'
import { CentralizedWrapper } from '../common/CentralizedWrapper'
import { MainTitle } from '../common/MainTitle'
import { TechStackBadge } from '../common/TechStackBadge';
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { HorizontalList, LinkWrapper, ProfileImageWrapper, ProjectItem, SmallP, StyledT1, StyledT3, VerticalList } from './index.styles';

export const Projects = () => {
    const { projects } = userData;

    return (
        <CentralizedWrapper>
            <MainTitle>Projects</MainTitle>
            {
                projects.length > 0 &&
                (<ul>
                    {projects.map((project, idx) => (
                        <ProjectItem key={idx}>
                            <ProfileImageWrapper>
                                <img src={project.imgUrl === '' ? noImage : project.imgUrl} alt='project' />
                            </ProfileImageWrapper>
                            <div>
                                <StyledT1>{project.title}</StyledT1>
                                <SmallP>{project.member} / {project.position}</SmallP>
                                <SmallP>{project.term}</SmallP>
                                {project.description !== '' && (
                                    <>
                                        <StyledT3>Description</StyledT3>
                                        <p>{project.description}</p>
                                    </>
                                )}
                                {project.attribution.length > 0 && (
                                    <>
                                        <StyledT3>What Did I do</StyledT3>
                                        <VerticalList>
                                            {project.attribution.map((task, task_idx) => (
                                                <li key={task_idx}>{task}</li>
                                            ))}
                                        </VerticalList>
                                    </>
                                )}
                                {project.techStacks.length > 0 && (
                                    <>
                                        <StyledT3>Tech Stacks</StyledT3>
                                        <HorizontalList>
                                            {project.techStacks.map((stack, s_idx) => (
                                                    <li><TechStackBadge key={s_idx}>{stack}</TechStackBadge></li>
                                            ))}
                                        </HorizontalList>
                                    </>
                                )}
                                {
                                    (project.projectUrl !== '' ||
                                     project.githubUrl !== '' ||
                                        project.blogUrl !== '') && (
                                        <>
                                            <StyledT3>Links</StyledT3>
                                            <LinkWrapper>
                                                {project.projectUrl && (<a href={project.projectUrl}><MdOpenInNew /></a>)}
                                                {project.githubUrl && (<a href={project.githubUrl}><FaGithub /></a>)}
                                                {project.blogUrl && (<a href={project.blogUrl}><FiBookOpen /></a>)}
                                            </LinkWrapper>
                                        </>
                                    )
                                }
                            </div>
                        </ProjectItem>
                    ))}
                </ul>)
            }
        </CentralizedWrapper>
    )
}