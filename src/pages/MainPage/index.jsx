import { PersonalInfo } from '../../components/PersonalInfo'
import { Projects } from '../../components/Projects'
import { Skills } from '../../components/Skills'
import { WorkExperience } from '../../components/WorkExperience'
// import { ForeignLangauges } from '../../components/ForeignLanguages'
// import { Education } from '../../components/Education'
import { Footer } from '../../components/common/Footer'

export const MainPage = () => {
    return (
        <>
            <PersonalInfo />
            <Skills />
            <WorkExperience />
            <Projects />
            {/* <ForeignLangauges /> */}
            {/* <Education /> */}
            <Footer />
        </>
    )
}