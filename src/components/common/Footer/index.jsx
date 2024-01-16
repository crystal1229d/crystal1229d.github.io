import { StyledFooter } from './index.styles'
import { IoIosArrowDropup } from "react-icons/io";

export const Footer = () => {
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <StyledFooter>
            <IoIosArrowDropup className='icon' onClick={ScrollToTop} /> 
            <div className='shadow' />
        </StyledFooter>
    )
}