import { StyledMark } from './index.styles'

export const Underlined = ({ children, color }) => {
    return (
        <StyledMark><span>{children}</span></StyledMark>
    )
}