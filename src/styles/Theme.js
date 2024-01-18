const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
    mainTitle: pixelToRem(60), 
    subTitle: pixelToRem(42), 
    large: pixelToRem(27), 
    medium: pixelToRem(18), 
    small: pixelToRem(15), 
}

export const darkTheme = {
    fontSizes, 
    colors: {
        black: '#000000', 
        gray: '#3B3B3B', 
        blue: '#3a7bd5', 
        background: '#1F2122', 
        fontColor: '#FFFFFF', 
        techStackFontColor: '#000000', 
        codeBg: '#f7f2ec', 
        toggleBg: 'linear-gradient(40deg, #8983F7, #A3DAFB 70%)', 
    } 
}

export const lightTheme = {
    fontSizes, 
    colors: {
        black: '#000000', 
        gray: '#3B3B3B', 
        blue: '#3a7bd5', 
        background: '#FFFFFF', 
        fontColor: '#000000', 
        techStackFontColor: '#FFFFFF', 
        codeBg: '#f7f2ec', 
        toggleBg: 'linear-gradient(40deg, #FF0080,#FF8C00 70%)', 
    } 
}