import { ButtonSeeVideoHero, ButtonStartHero, ContainerButtonsHero, ContainerContentHero, ContentHero, DescriptionContentHero, HeroContainer, ImageHero, TitleContentHero } from "./styles";
import manHero from '../../assets/man-hero.png'
import devicesIcon from '../../assets/devices.svg'
import playIcon from '../../assets/Play.svg'
import { TitleHat } from "../TitleHat";


export function Hero() {
    return (
        <HeroContainer>
            <ContainerContentHero>
                <TitleHat
                    srcImg={devicesIcon}
                    color="fontLight"
                    alt=""
                    title="plataforma all in one"
                    opacity
                />
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