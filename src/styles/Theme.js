const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
    mainTitle: pixelToRem(60), 
    subTitle: pixelToRem(42), 
    large: pixelToRem(27), 
    medium: pixelToRem(18), 
    small: pixelToRem(15), 
}

const colors = {
    black: '#000000', 
    gray: '#3B3B3B', 
    blue: '#3a7bd5', 
    codeBg: '#f7f2ec' 
}

const common = {
    centralized: `
        display: flex;
        justify-content: center;
        align-items: center;
    `, 
}

const theme = {
    fontSizes, 
    colors, 
    common, 
}
export default theme;