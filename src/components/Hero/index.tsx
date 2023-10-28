import { ButtonSeeVideoHero, ButtonStartHero, ContainerButtonsHero, ContainerContentHero, ContentHero, DescriptionContentHero, HeroContainer, HeroTitleHat, ImageHero, TitleContentHero } from "./styles";
import manHero from '../../assets/man-hero.png'
import devicesIcon from '../../assets/devices.svg'
import playIcon from '../../assets/Play.svg'

export function Hero() {
    return (
        <HeroContainer>
            <ContainerContentHero>
                <HeroTitleHat>
                    <img src={devicesIcon} alt="Devices" />
                    plataforma all in one
                </HeroTitleHat>

                <ContentHero>
                    <TitleContentHero>
                        Sua escola online <br />
                        poderosa e lucrativa
                    </TitleContentHero>

                    <DescriptionContentHero>
                        Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistemas EAD completo.
                    </DescriptionContentHero>

                    <ContainerButtonsHero>
                        <ButtonStartHero >
                            Começar agora
                        </ButtonStartHero>

                        <ButtonSeeVideoHero>
                            <img src={playIcon} alt="" />
                            Ver vídeo
                        </ButtonSeeVideoHero>
                    </ContainerButtonsHero>
                </ContentHero>

            </ContainerContentHero>
            <ImageHero
                src={manHero}
            />
        </HeroContainer>
    )
}