import styled from "styled-components";
import backgroundHero from '../../assets/bg-hero.png'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 43.75rem;
    width: 100%;

    background-image: url(${backgroundHero});
    background-size: cover;
    background-position: center;
`

export const ContentHero = styled.div`

`

export const ImageHero = styled.img`
    height: 33.3125rem;
    align-self: flex-end;
`