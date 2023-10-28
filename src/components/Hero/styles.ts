import styled from "styled-components";
import backgroundHero from '../../assets/bg-hero.png'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0 7rem;
    gap: 4rem;

    height: 43.75rem;
    width: 100%;

    background-image: url(${backgroundHero});
    background-size: cover;
    background-position: center;
`

export const ContainerContentHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2.75rem;
    padding:7.62rem 0;

    width: 31.1875rem;
`

export const HeroTitleHat = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    font: ${props => props.theme.fonts.tittleHat};
    color: ${props => props.theme.color.mainFontLight};
`

export const ContentHero = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.75rem;
`
export const TitleContentHero = styled.h1`
    width: 31.1875rem;
    font: ${props => props.theme.fonts.titleHero};
    color: ${props => props.theme.color.mainFontLight};
`

export const DescriptionContentHero = styled.p`
    width: 26rem;

    font: ${props => props.theme.fonts.bodyText16};
    color: ${props => props.theme.color.mainFontLight};
`

export const ContainerButtonsHero = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 2.5rem;
`

export const ButtonStartHero = styled.button`
    all: unset;

    width: 11.5rem;
    height: 3.5rem;
    border-radius: 5rem;

    text-align: center;
    font: ${props => props.theme.fonts.bodyLink};
    color: ${props => props.theme.color.neutralColor100};
    background-color: ${props => props.theme.color.brandColorTealPure};
    //TODO: Interações de hover
    &:hover{
        cursor: pointer;
    }
`

export const ButtonSeeVideoHero = styled.button`
    all: unset;

    display: flex;
    align-items: center;
    
    gap: 0.5rem;

    text-align: end;
    color: ${props => props.theme.color.mainFontLight};
    font: ${props => props.theme.fonts.bodyLink};
    //TODO: Interações de hover
    &:hover{
        cursor: pointer;
    }
`

export const ImageHero = styled.img`
    height: 33.3125rem;
    margin-right: -2rem;
`