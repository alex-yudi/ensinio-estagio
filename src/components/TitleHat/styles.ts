import styled from "styled-components";

export const TitleHatContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    font: ${props => props.theme.fonts.tittleHat};
    
    &.fontLight {
        color: ${props => props.theme.color.mainFontLight};
    }
    &.brandColorDark {
        color: ${props => props.theme.color.brandColorDark};
    }
    &.opacity{
        opacity: 0.75;
    }
`