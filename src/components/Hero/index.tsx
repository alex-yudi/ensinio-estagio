import { ContentHero, HeroContainer, ImageHero } from "./styles";
import manHero from '../../assets/man-hero.png'

export function Hero() {
    return (
        <HeroContainer>
            <ContentHero></ContentHero>
            <ImageHero
                src={manHero}
            />
        </HeroContainer>
    )
}