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

    
    @media (max-width: 1250px) {
        gap: 0rem;
        padding: 0 4rem;
    }

    @media (max-width: 375px) {
        align-items: center;
        background-size: cover;
    }
`

export const ContainerContentHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2.75rem;
    padding:7.62rem 0;

    width: 31.1875rem;

    
    @media (max-width: 1250px) {
        width: 27rem;
        
    }

    @media (max-width: 375px) {
        align-items: center;
        justify-content: center;
        
        width: 20rem;
    }
`

export const ContentHero = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.75rem;

    @media (max-width: 375px) {
        gap: 1rem;
    }
`
export const TitleContentHero = styled.h1`
    width: 31.1875rem;
    font: ${props => props.theme.fonts.titleHero};
    color: ${props => props.theme.color.mainFontLight};


    @media (max-width: 375px) {
        width: 20rem;
        font-size: 3rem;
    }
`

export const DescriptionContentHero = styled.p`
    width: 26rem;

    font: ${props => props.theme.fonts.bodyText16};
    color: ${props => props.theme.color.mainFontLight};

    @media (max-width: 375px) {
        width: 15rem;
        font-size: 1rem;
    }
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
        filter: brightness(0.85);
        box-shadow: 0 0 3px ${props => props.theme.color.brandColorTealPure};
        transition: all .3s;
    }

    @media (max-width: 1250px) {
        width: 9rem;
        height: 2.5rem;
    }
`

export const ButtonSeeVideoHero = styled.button`
    all: unset;

    display: flex;
    align-items: center;
    
    gap: 0.5rem;
    border-radius: 25px;
    padding: 0 1rem;

    text-align: end;
    color: ${props => props.theme.color.mainFontLight};
    font: ${props => props.theme.fonts.bodyLink};
    //TODO: Interações de hover
    &:hover{
        cursor: pointer;
        box-shadow: 0 0 3px ${props => props.theme.color.brandColorTealPure};
        transition: all .3s;
    }

    @media (max-width: 1250px) {
        padding: 0 0.5rem;
        gap: 0.3rem;
    }

    @media (max-width: 375px) {
        display: none;
    }
`

export const ImageHero = styled.img`
    height: 33.3125rem;
    margin-right: -2rem;

    @media (max-width: 1152px) {
        height: 28rem;
        margin-right: 0;
    }
    @media (max-width: 375px) {
        display: none;
    }
`